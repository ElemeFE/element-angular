import { Component } from '@angular/core'
import { ElInputNumberPoprs } from './input-number-props'

@Component({
  selector: 'el-input-number',
  template: `
    <div [class]="'el-input-number' + (size ? ' el-input-number--' + size : '')"
      [class.is-disabled]="disabled" [class.is-without-controls]="!controls">
      
    <span *ngIf="controls" class="el-input-number__decrease"
      [class.is-disabled]="minDisabled" (click)="decreaseHandle(false)">
      <i class="el-icon-minus"></i>
    </span>
    <span *ngIf="controls" class="el-input-number__increase"
      [class.is-disabled]="maxDisabled" (click)="decreaseHandle(true)">
      <i class="el-icon-plus"></i>
    </span>
    
    <el-input [model]="model" (modelChange)="changeHandle($event)"
      [value]="model" [disabled]="disabled" [size]="size">
    </el-input>
    </div>
  `,
})
export class ElInputNumber extends ElInputNumberPoprs {
  
  minDisabled: boolean = false
  maxDisabled: boolean = false
  
  constructor(
  ) {
    super()
  }
  
  changeHandle(value: any): void {
    this.model = value
    this.maxDisabled = value > this.max
    this.minDisabled = value < this.min
    if (this.maxDisabled) return this.dispatchModel(this.max)
    if (this.minDisabled) return this.dispatchModel(this.min)
    this.modelChange.emit(value)
  }
  
  dispatchModel(limit: number): void {
    const timer = setTimeout(() => {
      this.model = limit
      this.modelChange.emit(limit)
      clearTimeout(timer)
    }, this.debounce)
  }
  
  // button val is inelastic
  decreaseHandle(calcType: boolean = true): void {
    const step: number = calcType ? this.step : 0 - this.step
    const val: number =  Number(this.model) + step
    if (Number.isNaN(val)) return
    this.maxDisabled = val > this.max
    this.minDisabled = val < this.min
    if (!this.maxDisabled && !this.minDisabled) {
      this.model = val
    }
  }
  
}
