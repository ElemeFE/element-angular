import { Component, Input } from '@angular/core'
import { ElDatePickerProps } from './picker-props'
import { DateFormat } from './utils/format'

@Component({
  selector: 'el-date-picker',
  providers: [DateFormat],
  template: `
    <div>
      <el-input [class]="'el-date-editor ' + 'el-date-editor--' + type"
        [readonly]="!editable || readonly" [disabled]="disabled"
        [size]="size" [placeholder]="placeholder"
        [icon]="showClose ? 'close' : 'date'"
        (icon-click)="iconClickHandle()"
        [model]="model" (modelChange)="changeHandle($event)"
        (focus)="focusHandle()" (blur)="blurHandle()">
      </el-input>
      <el-data-picker-panel [show]="showPanelPicker"
        (modelChange)="dateChangeHandle($event)">
      </el-data-picker-panel>
    </div>
  `,
})
export class ElDataPicker extends ElDatePickerProps {
  
  private showPanelPicker: boolean = false
  
  constructor(
    private dateFormat: DateFormat,
  ) {
    super()
  }
  
  iconClickHandle(): void {
    this.showPanelPicker = !this.showPanelPicker
  }
  
  changeHandle(): void {
  
  }
  
  dateChangeHandle(time: number): void {
    this.model = DateFormat.moment(time, this.format)
    this.modelChange.emit(this.model)
  }
  
  focusHandle(): void {
    this.showPanelPicker = true
  }
  
  blurHandle(): void {
    // this.showPanelPicker = false
  }
  
}
