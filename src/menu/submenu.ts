import { Component, ContentChild, Host, Input, OnChanges, OnInit, TemplateRef } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { dropAnimation } from '../shared/animation'
import { ElMenu } from './menu'

@Component({
  selector: 'el-submenu',
  animations: [dropAnimation],
  template: `
    <li [class.el-submenu]="true"
      [class.is-active]="active"
      [class.is-opened]="opened"
      (mouseenter)="mouseenterHandle()"
      (mouseleave)="mouseleaveHandle()">
      <div class="el-submenu__title" (click)="clickHandle()" [style]="paddingStyle()">
        <ng-container *ngIf="!titleTmp">
          {{title}}
        </ng-container>
        <ng-container *ngIf="titleTmp">
          <ng-template [ngTemplateOutlet]="titleTmp"></ng-template>
        </ng-container>
        <i [ngClass]="classesIcon()"></i>
      </div>
      <ul class="el-menu" [@dropAnimation]="opened">
        <ng-content></ng-content>
      </ul>
    </li>
  `,
})
export class ElSubmenu implements OnChanges, OnInit {
  
  @ContentChild('title') titleTmp: TemplateRef<any>
  
  @Input() index: string
  @Input() title: string
  
  private timer: any
  private opened: boolean = false
  private active: boolean = false
  
  constructor(
    @Host() private rootMenu: ElMenu,
    private sanitizer: DomSanitizer,
    ) {
  }
  
  classesIcon(): any {
    return {
      'el-submenu__icon-arrow': true,
      'el-icon-caret-bottom': this.rootMenu.mode === 'horizontal',
      'el-icon-arrow-down': this.rootMenu.mode === 'vertical' && !this.rootMenu.collapse,
      'el-icon-caret-right': this.rootMenu.mode === 'vertical' && this.rootMenu.collapse,
    }
  }
  
  mouseenterHandle(): void {
    this.active = true
    
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.rootMenu.openMenu(this.index)
      this.updateOpened()
      clearTimeout(this.timer)
    }, 300)
  }
  
  mouseleaveHandle(): void {
    this.active = false
    
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.rootMenu.closeMenu(this.index)
      this.updateOpened()
      clearTimeout(this.timer)
    }, 300)
  }
  
  selectHandle(path: string): void {
    this.rootMenu.selectHandle(this.index, path)
    // selected and close list
    this.rootMenu.closeMenu(this.index)
    this.updateOpened()
  }
  
  updateOpened(): void {
    this.opened = this.rootMenu.openedMenus.indexOf(this.index) > -1
  }
  
  clickHandle(): void {
  
  }
  
  paddingStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`padding-left: 20px`)
  }
  
  ngOnChanges(changes: any): void {
    if (!changes || !changes.rootMenu) return
  }
  
  ngOnInit(): void {
    this.updateOpened()
    this.active = this.index === this.rootMenu.model
  }
  
}
