import { Component, Input, OnInit, ElementRef, Optional } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { ElMenu } from './menu'
import { ElSubmenu } from './submenu'
import { removeNgTag } from '../shared/utils'

@Component({
  selector: 'el-menu-item',
  template: `
    <li class="el-menu-item" (click)="clickHandle()"
      [ngStyle]="paddingStyle()"
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
  
  paddingStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle('padding-left: 20px')
  }
  
  clickHandle(): void {
    const comRef: ElMenu | ElSubmenu = this.subMenu || this.rootMenu
    comRef.selectHandle(this.index)
  }
  
  ngOnInit(): void {
    removeNgTag(this.el.nativeElement)
  }
  
}

