import { Component, HostListener, OnDestroy, Renderer2 } from '@angular/core'
import { Value } from './dropdown.item'
import { ElDropdownProps } from './dropdown.props'
import { dropAnimation } from '../shared/animation'

@Component({
  selector: 'el-dropdown',
  template: `
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
    <div class="el-dropdown">
      <ng-container *ngIf="splitButton">
        <el-button [type]="type" [size]="size" (click)="openMenu($event)">
          <span>
            <ng-template [ngTemplateOutlet]="content"></ng-template>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
        </el-button>
      </ng-container>
      <ng-container *ngIf="!splitButton">
        <span class="el-dropdown-link" (click)="openMenu($event)" style="cursor: pointer;">
          <ng-template [ngTemplateOutlet]="content"></ng-template>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
      </ng-container>
      
      <ul class="el-dropdown-menu" [ngStyle]="{
        top: '100%',
        left: menuAlign === 'end' ? 'auto' : 0,
        right: menuAlign === 'end' ? 0 : 'auto'}"
        [@dropAnimation]="showMenu">
        <el-dropdown-item *ngFor="let item of model" [model]="item"
          (selected)="selectHandle()">
        </el-dropdown-item>
      </ul>
    </div>
  `,
  animations: [dropAnimation],
})
export class ElDropdown extends ElDropdownProps implements OnDestroy {
  
  private showMenu: boolean = false
  private timer: any
  private globalListenFunc: Function
  
  @HostListener('mouseleave') mouseleave = () => {
    if (this.trigger !== 'hover') return
    this.timer = setTimeout(() => {
      this.closeMenu()
      clearTimeout(this.timer)
    }, 400)
  }
  
  @HostListener('mouseenter') mouseenter = () => {
    if (this.trigger !== 'hover') return
    this.timer && clearTimeout(this.timer)
    !this.showMenu && this.visibleChange.emit()
    this.showMenu = true
  }
  
  constructor(
    private renderer: Renderer2,
  ) {
    super()
  }
  
  openMenu(event?: Event): void {
    event && event.stopPropagation()
    this.showMenu = !this.showMenu
    this.visibleChange.emit()
    this.globalListenFunc = this.renderer.listen(
      'document',
      'click',
      () => this.closeMenu()
    )
  }
  
  closeMenu(): void {
    this.showMenu = false
    this.visibleChange.emit()
    this.globalListenFunc && this.globalListenFunc()
  }
  
  selectHandle(model: Value): void {
    this.selected.emit(model)
    
    // select and hide menu (props)
    this.hideOnClick && this.closeMenu()
  }
  
  ngOnDestroy(): void {
    this.globalListenFunc && this.globalListenFunc()
  }

}

