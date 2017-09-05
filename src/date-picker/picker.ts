import { Component, Input, OnInit } from '@angular/core'
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
        [model]="value"
        (modelChange)="dateChangeHandle($event)">
      </el-data-picker-panel>
    </div>
  `,
})
export class ElDataPicker extends ElDatePickerProps implements OnInit {
  
  private showPanelPicker: boolean = false
  private value: number
  
  constructor(
    private dateFormat: DateFormat,
  ) {
    super()
  }
  
  iconClickHandle(): void {
    this.showPanelPicker = !this.showPanelPicker
  }
  
  // text to time
  changeHandle(input: string): void {
    const time: number = this.dateFormat.getTime(input)
    if (!time) return
    this.value = time
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
  
  // text to time
  ngOnInit(): void {
    const time: number = this.dateFormat.getTime(this.model)
    if (!time) return
    this.model = DateFormat.moment(time, this.format)
    this.value = time
  }
  
}
