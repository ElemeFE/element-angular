import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'el-radio-group',
  template: `
    <div class="el-radio-group" role="radiogroup">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElRadioGroup {
  
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
      this.subscriber.forEach(sub => sub())
    }, 0)
  }
  
}
