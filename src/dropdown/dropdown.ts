import { Component, HostListener } from '@angular/core'
import { Value } from './dropdown.item'
import { ElDropdownProps } from './dropdown.props'
import { dropAnimation } from '../shared/animation'

@Component({
  selector: 'el-dropdown',
  template: `
    <div class="el-dropdown">
      <ng-container *ngIf="splitButton">
        <el-button [type]="type" [size]="size" (click)="openMenu()">
        <span class="el-dropdown-link">
          <ng-content></ng-content>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        </el-button>
      </ng-container>
      <ng-container *ngIf="!splitButton">
        <span class="el-dropdown-link" (click)="openMenu()"
          style="cursor: pointer;">
          <ng-content></ng-content>
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
export class ElDropdown extends ElDropdownProps {
  
  private showMenu: boolean = false
  private timer: any
  
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
  ) {
    super()
  }
  
  openMenu(): void {
    this.showMenu = !this.showMenu
    this.visibleChange.emit()
  }
  
  closeMenu(): void {
    this.showMenu = false
    this.visibleChange.emit()
  }
  
  selectHandle(model: Value): void {
    this.selected.emit(model)
    
    // select and hide menu (props)
    this.hideOnClick && this.closeMenu()
  }

}

