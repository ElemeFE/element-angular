import { Component, Input, OnInit, ElementRef, Optional } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { ElMenu } from './menu'
import { ElSubmenu } from './submenu'
import { removeNgTag } from '../shared/utils'

@Component({
  selector: 'el-menu-item',
  template: `
    <li class="el-menu-item" (click)="clickHandle()" #list
      [ngStyle]="{ paddingLeft: '20px',
      backgroundColor: rootMenu.backgroundColor || '',
      borderBottomColor: activeColor(),
      color: rootMenu.textColor || '' }"
      (mouseenter)="list.style.backgroundColor = rootMenu.hoverBackgroundColor()"
      (mouseleave)="list.style.backgroundColor = rootMenu.backgroundColor || ''"
      [class.is-active]="rootMenu.model === index"
      [class.is-disabled]="disabled">
      <ng-content></ng-content>
    </li>
  `,
})
export class ElMenuItem implements OnInit {
  
  @Input() index: string
  @Input() disabled: boolean = false
  @Input() title: string = ''
  
  constructor(
    @Optional() public rootMenu: ElMenu,
    @Optional() private subMenu: ElSubmenu,
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {
  }
  
  clickHandle(): void {
    const comRef: any = this.subMenu || this.rootMenu
    comRef.selectHandle(this.index)
  }
  
  activeColor(): string {
    return this.rootMenu.model === this.index ?
      (this.rootMenu.activeTextColor ? this.rootMenu.activeTextColor : '')
      : 'transparent'
  }
  
  ngOnInit(): void {
    removeNgTag(this.el.nativeElement)
  }
  
}

