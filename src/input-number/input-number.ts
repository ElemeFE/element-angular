import { Component, forwardRef } from '@angular/core'
import { ElInputNumberPoprs } from './input-number-props'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'el-input-number',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ElInputNumber),
    multi: true
  }],
  styles: [`
    .el-input-spin-button::-webkit-inner-spin-button { visibility: hidden; -webkit-appearance: none; }
    .el-input-spin-button { -moz-appearance: textfield; }
  `],
  template: `
    <div [class]="'el-input-number' + (size ? ' el-input-number--' + size : '')"
      [class.is-disabled]="disabled" [class.is-without-controls]="!controls">
      <span *ngIf="controls" class="el-input-number__decrease" role="button"
        [class.is-disabled]="minDisabled" (click)="decreaseHandle(false)">
        <i class="el-icon-minus"></i>
      </span>
      <span *ngIf="controls" class="el-input-number__increase" role="button"
        [class.is-disabled]="maxDisabled" (click)="decreaseHandle(true)">
        <i class="el-icon-plus"></i>
      </span>

      <div [class]="'el-input ' + (size ? ' el-input--' + size : '')" [class.is-disabled]="disabled">
        <input class="el-input__inner el-input-spin-button  " autocomplete="off" role="spinbutton"
          [attr.max]="max" [attr.min]="min" [attr.aria-valuemax]="max" [attr.aria-valuemin]="min"
          [disabled]="disabled" [value]="model" [ngModel]="model" (ngModelChange)="changeHandle($event)"
          type="number" rows="2" aria-valuenow="1" [attr.aria-disabled]="disabled">
      </div>
    </div>
  `,
})
export class ElInputNumber extends ElInputNumberPoprs implements ControlValueAccessor {
  
  minDisabled: boolean = false
  maxDisabled: boolean = false
  
  constructor(
  ) {
    super()
  }
  
  changeHandle(value: number): void {
    const oldValue: number = this.model
    this.model = value
    if (Number.isNaN(+this.model)) {
      this.model = oldValue
      return
    }
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
    if (this.disabled) return
    const step: number = calcType ? this.step : 0 - this.step
    const val: number =  Number(this.model) + step
    if (Number.isNaN(val)) return
    this.maxDisabled = val > this.max
    this.minDisabled = val < this.min
    if (!this.maxDisabled && !this.minDisabled) {
      this.model = val
      this.modelChange.emit(this.model)
      this.controlChange(this.model)
    }
  }
  
  writeValue(value: any): void {
    this.model = value
  }
  
  registerOnChange(fn: Function): void {
    this.controlChange = fn
  }
  
  registerOnTouched(fn: Function): void {
    this.controlTouch = fn
  }
  
  private controlChange: Function = () => {}
  private controlTouch: Function = () => {}
  
}
