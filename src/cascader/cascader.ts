import {
  Component, Input, Output, EventEmitter, OnInit,
  ElementRef,
} from '@angular/core'
import { ElCascaderPoprs } from './cascader-props'
import { removeNgTag } from '../shared/utils'

@Component({
  selector: 'el-cascader',
  template: `
    <span [class]="'el-cascader ' +  (visible ? 'is-opened ' : '') + (disabled ? 'is-disabled ' : '')
      + (size ? 'el-cascader--' + size : '')"
      (click)="clickHandle()"
      (mouseenter)="inputHover = true" (mouseleave)="inputHover = false">
    <el-input [readonly]="true"
      [placeholder]="currentLabels.length ? undefined : placeholder"
      [model]="inputValue" (modelChange)="changeHandle($event)"
      [size]="size" [disabled]="disabled">
      <ng-template #append>
        <i *ngIf="showClearIcon()"
          class="el-input__icon el-icon-circle-close el-cascader__clearIcon"
          (click)="clearValue()"></i>
        <i *ngIf="!showClearIcon()"
          [class]="'el-input__icon el-icon-caret-bottom ' + (visible ? 'is-reverse' : '')"></i>
      </ng-template>
    </el-input>
    
    <span class="el-cascader__label" *ngIf="inputValue === ''">
      <ng-container *ngIf="allLevels">
        <ng-container *ngFor="let label of currentLabels; let i = index">
          {{ label }}
          <span *ngIf="i < currentLabels.length - 1"> / </span>
        </ng-container>
      </ng-container>
      <ng-container *ngIf="!allLevels">
        {{ currentLabels[currentLabels.length - 1] }}
      </ng-container>
    </span>
  </span>
  `,
})
export class ElCascader extends ElCascaderPoprs implements OnInit {
  
  private inputHover: boolean = false
  private currentLabels: any[] = []
  
  constructor(
    private el: ElementRef,
  ) {
    super()
  }
  
  clickHandle(): void {
  
  }
  
  changeHandle(nextValue: any): void {
  
  }
  
  clearValue(): void {
  
  }
  
  showClearIcon(): boolean {
    return !!(this.clearable && this.inputHover && this.currentLabels.length)
  }
  
  ngOnInit(): void {
  }
  
}
