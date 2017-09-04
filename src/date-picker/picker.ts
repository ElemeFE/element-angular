import { Component, Input } from '@angular/core'
import { ElDatePickerProps } from './picker-props'

@Component({
  selector: 'el-date-picker',
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
      <el-data-picker-panel [show]="showPanelPicker">
      </el-data-picker-panel>
    </div>
  `,
})
export class ElDataPicker extends ElDatePickerProps {
  
  private showPanelPicker: boolean = false
  
  constructor() {
    super()
  }
  
  iconClickHandle(): void {
  
  }
  
  changeHandle(): void {
  
  }
  
  focusHandle(): void {
    this.showPanelPicker = true
  }
  
  blurHandle(): void {
    // this.showPanelPicker = false
  }
  
}
