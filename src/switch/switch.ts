import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'el-switch',
  template: `
    <label class="el-switch"
      [class.is-disabled]="disabled"
      [class.el-switch--wide]="hasText"
      [class.is-checked]="model">
      <div class="el-switch__mask" [hidden]="!disabled"></div>
      <input class="el-switch__input" type="checkbox"
        [name]="name" [disabled]="disabled"
        [ngModel]="model" (ngModelChange)="changeHandle($event)">
      
      <span class="el-switch__core" [style]="coreStyles">
        <span class="el-switch__button" [style]="iconTransform"></span>
      </span>
      
      <div class="el-switch__label el-switch__label--left" *ngIf="model" [style]="labelStyles">
        <i [class]="onIconClass" *ngIf="onIconClass"></i>
        <span *ngIf="!onIconClass && onText">{{ onText }}</span>
      </div>
      
      <div class="el-switch__label el-switch__label--right" *ngIf="!model" [style]="labelStyles">
        <i [class]="offIconClass" *ngIf="offIconClass"></i>
        <span *ngIf="!offIconClass && offText">{{ offText }}</span>
      </div>
    </label>
  `,
})
export class ElSwitch implements OnInit {
  
  @Input() name: string
  @Input() disabled: boolean = false
  @Input() width: number
  @Input('on-icon-class') onIconClass: string
  @Input('off-icon-class') offIconClass: string
  @Input('on-text') onText: string = 'ON'
  @Input('off-text') offText: string = 'OFF'
  @Input('on-color') onColor: string
  @Input('off-color') offColor: string
  
  // bind value
  @Input() model: boolean = false
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  private hasText: boolean = false
  private realWidth: number
  private labelStyles: SafeStyle
  private coreStyles: SafeStyle
  private iconTransform: SafeStyle
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  changeHandle(nextValue: boolean): void {
    this.model = nextValue
    this.modelChange.emit(nextValue)
    this.updateStyles()
  }
  
  updateStyles(): void {
    let baseStyle = `width: ${this.realWidth}px`
    const translate = this.model ? `translate(${this.realWidth - 20}px, 2px)` : 'translate(2px, 2px)'
    const color = this.model ? this.onColor : this.offColor;
    const colorStyles = `border-color: ${color}; background-color: ${color}`
    
    this.labelStyles = this.sanitizer.bypassSecurityTrustStyle(baseStyle)
    this.iconTransform = this.sanitizer.bypassSecurityTrustStyle(`transform: ${translate}`)
    if (this.onColor && this.offColor) {
      baseStyle += colorStyles
    }
    this.coreStyles = this.sanitizer.bypassSecurityTrustStyle(baseStyle)
  }
  
  ngOnInit(): void {
    this.hasText = !!this.onText || !!this.offText
    this.realWidth = this.width ? this.width : (this.hasText ? 58 : 46)
    this.updateStyles()
  }
  
}
