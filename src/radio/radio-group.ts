import { Component, Input, ViewChild, AfterContentInit, ContentChild } from '@angular/core'
import { ElRadio } from './radio'

@Component({
  selector: 'el-radio-group',
  template: `
    <div class="el-radio-group">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElRadioGroup implements AfterContentInit {
  
  @Input('size') buttonSize: string
  @Input('fill') fillColor: string = '#20a0ff'
  @Input() textColor: string
  @Input() disabled: boolean = false
  
  @ContentChild(ElRadio) radioTmp: ElRadio
  
  constructor(
  ) {
  }
  
  ngAfterContentInit() {
    this.radioTmp._fromParentSet({
      buttonSize: this.buttonSize,
      fillColor: this.fillColor,
      textColor: this.textColor,
      disabled: this.disabled,
    })
  }
  
}
