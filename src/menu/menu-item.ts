import { Component, Input, OnInit, ElementRef, Optional } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { ElMenu } from './menu'
import { ElSubmenu } from './submenu'
import { isParentTag, removeNgTag } from '../shared/utils'

@Component({
  selector: 'el-menu-item',
  template: `
    <li class="el-menu-item" (click)="clickHandle()" #list
      [ngStyle]="{ paddingLeft: '20px',
      backgroundColor: rootMenu.backgroundColor || '',
      borderBottomColor: borderColor(),
      color: color() }"
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
  private inSubmenu: boolean = false
  
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
    const nextBorderIndex: string = (this.inSubmenu && this.subMenu) ? this.subMenu.index : this.index
    this.rootMenu.showBorderIndex = nextBorderIndex
  }
  
  borderColor(): string {
    // not show border in group
    const dontShowBorder = this.inSubmenu && this.subMenu
    if (dontShowBorder) return 'transparent'
    return this.rootMenu.showBorderIndex === this.index ?
      (this.rootMenu.activeTextColor ? this.rootMenu.activeTextColor : '')
      : 'transparent'
  }
  
  color(): string {
    return this.rootMenu.model === this.index ?
      (this.rootMenu.activeTextColor ? this.rootMenu.activeTextColor : '#409eff')
      : this.rootMenu.textColor ? this.rootMenu.textColor : '#909399'
  }
  
  ngOnInit(): void {
    this.inSubmenu = isParentTag(this.el.nativeElement, 'el-submenu')
    removeNgTag(this.el.nativeElement)
  }
  
}

