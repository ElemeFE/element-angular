import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'el-switch',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ElSwitch),
    multi: true
  }],
  template: `
    <label class="el-switch"
      [class.is-disabled]="elDisabled"
      [class.el-switch--wide]="hasText"
      [class.is-checked]="_model">
      <div class="el-switch__mask" *ngIf="elDisabled"></div>
      <input class="el-switch__input" type="checkbox"
        [name]="name" [disabled]="elDisabled"
        [ngModel]="_model" (ngModelChange)="changeHandle($event)">
      
      <div class="el-switch__label el-switch__label--left" [class.is-active]="!_model"
        *ngIf="inactiveText || inactiveIconClass">
        <i [class]="inactiveIconClass" *ngIf="inactiveIconClass"></i>
        <span *ngIf="!inactiveIconClass">{{ inactiveText }}</span>
      </div>

      <span class="el-switch__core" [style]="coreStyles">
        <span class="el-switch__button" [style]="iconTransform"></span>
      </span>

      <div class="el-switch__label el-switch__label--right" [class.is-active]="_model"
           *ngIf="activeText || activeIconClass">
        <i [class]="activeIconClass" *ngIf="activeIconClass"></i>
        <span *ngIf="!activeIconClass">{{ activeText }}</span>
      </div>
    </label>
  `,
})
export class ElSwitch implements OnInit, ControlValueAccessor {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.')
  }
  @Input() elDisabled: boolean = false
  @Input() name: string
  @Input() width: number
  @Input('active-icon-class') activeIconClass: string
  @Input('inactive-icon-class') inactiveIconClass: string
  @Input('active-text') activeText: string
  @Input('inactive-text') inactiveText: string
  @Input('active-color') activeColor: string = '#409EFF'
  @Input('inactive-color') inactiveColor: string = '#C0CCDA'
  
  // bind value
  @Input() set model(val: boolean) {
    this._model = val
    this.updateStyles()
  }
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  _model: boolean = false
  hasText: boolean = false
  realWidth: number
  coreStyles: SafeStyle
  iconTransform: SafeStyle
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  changeHandle(nextValue: boolean): void {
    this.model = nextValue
    this.modelChange.emit(nextValue)
    this.controlChange(nextValue)
  }
  
  updateStyles(): void {
    let baseStyle = `width: ${this.realWidth}px;`
    const translate = this._model ? `translate3d(${this.realWidth - 20}px, 0, 0)` : ''
    const color = this._model ? this.activeColor : this.inactiveColor;
    const colorStyles = `border-color: ${color}; background-color: ${color};`
    
    this.iconTransform = this.sanitizer.bypassSecurityTrustStyle(`transform: ${translate}`)
    if (this.activeColor && this.inactiveColor) {
      baseStyle += colorStyles
    }
    this.coreStyles = this.sanitizer.bypassSecurityTrustStyle(baseStyle)
  }
  
  ngOnInit(): void {
    this.realWidth = this.width ? this.width : 40
    this.updateStyles()
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
