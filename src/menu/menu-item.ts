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
      <el-tooltip *ngIf="isGroup" effect="dark" placement="right">
        <div style="position: absolute;left: 0;top: 0;height: 100%;width: 100%;display: inline-block;box-sizing: border-box;padding: 0 20px;">
          <ng-content></ng-content>
        </div>
        <ng-template #tip>
          <span >{{title}}</span>
        </ng-template>
      </el-tooltip>
      <ng-container *ngIf="!isGroup">
        <ng-content></ng-content>
      </ng-container>
    </li>
  `,
})
export class ElMenuItem implements OnInit {
  
  @Input() index: string
  @Input() disabled: boolean = false
  @Input() title: string = ''
  
  constructor(
    @Optional() private rootMenu: ElMenu,
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

