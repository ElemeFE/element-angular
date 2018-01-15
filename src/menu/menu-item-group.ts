import { Component, ContentChild, Host, Input, OnInit, TemplateRef } from '@angular/core'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'
import { ElMenu } from './menu'

@Component({
  selector: 'el-menu-item-group',
  template: `
    <li class="el-menu-item-group">
      <div class="el-menu-item-group__title" [style]="paddingStyle()" #groupTitle
        (mouseenter)="groupTitle.style.backgroundColor = rootMenu.hoverBackgroundColor() "
        (mouseleave)="groupTitle.style.backgroundColor = ''">
        <ng-container *ngIf="!titleTmp">
          {{title}}
        </ng-container>
        <ng-container *ngIf="titleTmp">
          <ng-template [ngTemplateOutlet]="titleTmp"></ng-template>
        </ng-container>
      </div>
      <ul><ng-content></ng-content></ul>
    </li>
  `
})
export class ElMenuItemGroup implements OnInit {
  
  @ContentChild('title') titleTmp: TemplateRef<any>
  @Input() title: string = ''
  
  constructor(
    @Host() public rootMenu: ElMenu,
    private sanitizer: DomSanitizer,
  ) {
  }
  
  paddingStyle(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle('padding-left: 20px')
  }

  ngOnInit(): void {
    if (!this.title) {
      console.warn('el-menu-item-group required props: [title: string]')
    }
  }
}
