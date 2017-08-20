import { Component, Input, ChangeDetectionStrategy, Host, OnInit, ElementRef } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { ElMenu } from './menu'
import { Utils } from '../shared'

@Component({
  selector: 'el-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <li class="el-menu-item" (click)="clickHandle"
      [ngStyle]="paddingStyle()"
      [ngClass]="{ 'is-active': active, 'is-disabled': disabled }">
      <el-tooltip *ngIf="isGroup" [context]="{ effect: 'dark', placement: 'right', content: title }">
        <div style="position: absolute;left: 0;top: 0;height: 100%;width: 100%;display: inline-block;box-sizing: border-box;padding: 0 20px;">
          <ng-content></ng-content>
        </div>
      </el-tooltip>
      <ng-container *ngIf="!isGroup">
        <ng-content></ng-content>
      </ng-container>
    </li>
  `,
  providers: [ElMenu],
})
export class ElMenuItem implements OnInit {
  
  @Input() index: string
  @Input() disabled: boolean = false
  @Input() title: string = ''
  
  private active: boolean = false
  private parentIsMenu: boolean = false
  
  constructor(
    private sanitizer: DomSanitizer,
    @Host() private rootMenu: ElMenu,
    private el: ElementRef,
  ) {
  }
  
  paddingStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle('padding-left: 20px')
  }
  
  clickHandle(): void {
  
  }
  
  ngOnInit(): void {
    const nativeElement = this.el.nativeElement
    this.parentIsMenu = Utils.isParentTag(nativeElement, 'el-menu')
    Utils.removeNgTag(nativeElement)
    this.active = this.parentIsMenu && this.rootMenu.defaultActive === this.index
  }
}

