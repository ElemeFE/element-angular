import { Component, Input, AfterContentInit, EventEmitter, Output, ContentChildren, OnChanges } from '@angular/core'
import { ElRadio } from './radio'
import { ElRadioButton } from './radio-button'

@Component({
  selector: 'el-radio-group',
  template: `
    <div class="el-radio-group">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElRadioGroup implements AfterContentInit, OnChanges {
  
  @Input('size') buttonSize: string
  @Input('fill') fillColor: string = '#20a0ff'
  @Input() textColor: string
  @Input() disabled: boolean = false
  
  @Input() model: any
  @Output() modelChange = new EventEmitter<any>()
  @ContentChildren(ElRadio) radioTmp: any
  @ContentChildren(ElRadioButton) radioBtnTmp: any
  
  change(results: any[], handler: any): void {
    results.forEach((radio: ElRadio | ElRadioButton) => {
      radio._fromParentSet({
        buttonSize: this.buttonSize,
        fillColor: this.fillColor,
        textColor: this.textColor,
        disabled: this.disabled,
        modelChange: (model: any) => handler.emit(model),
      })
      radio._fromParentSetOnlyModel(this.model)
    })
  }
  
  ngAfterContentInit(): void {
    this.radioTmp._results && this.change(this.radioTmp._results, this.modelChange)
    this.radioBtnTmp._results && this.change(this.radioBtnTmp._results, this.modelChange)
  }
  
  ngOnChanges(changes: any): void {
    if (!changes || !changes.model) return
    if (this.radioTmp) {
      this.radioTmp._results.forEach((radio: ElRadio) => {
        radio._fromParentSetOnlyModel(changes.model.currentValue)
      })
    }
    if (this.radioBtnTmp) {
      this.radioBtnTmp._results.forEach((radio: ElRadioButton) => {
        radio._fromParentSetOnlyModel(changes.model.currentValue)
      })
    }
  }
  
}
