import { Component, Input, EventEmitter, Output, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'el-radio-group',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ElRadioGroup),
    multi: true
  }],
  template: `
    <div class="el-radio-group" role="radiogroup">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElRadioGroup implements ControlValueAccessor {
  
  @Input('size') buttonSize: string
  @Input('fill') fillColor: string = '#20a0ff'
  @Input() textColor: string = '#ffffff'
  @Input() disabled: boolean = false
  @Input() model: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  subscriber: Function[] = []
  
  changeHandle(nextValue: string | number): void {
    setTimeout(() => {
      this.model = nextValue
      this.modelChange.emit(nextValue)
      this.controlChange(nextValue)
      this.subscriber.forEach(sub => sub())
    }, 0)
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
