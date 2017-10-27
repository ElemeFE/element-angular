import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core'
import { ElDatePickerProps } from './picker-props'
import { DateFormat } from './utils/format'

@Component({
  selector: 'el-date-picker',
  providers: [DateFormat],
  template: `
    <div (click)="propagationHandle($event)">
      <el-input [class]="'el-date-editor ' + 'el-date-editor--' + type"
        [readonly]="!editable || readonly"
        [disabled]="disabled"
        [size]="size" [placeholder]="placeholder"
        [icon]="iconShowClose ? 'close' : 'date'"
        [model]="model"
        (icon-click)="iconClickHandle($event)"
        (modelChange)="changeHandle($event)"
        (icon-mouseenter)="iconMouseActionHandle(true)"
        (icon-mouseleave)="iconMouseActionHandle(false)"
        (focus)="focusHandle()">
      </el-input>
      <el-data-picker-panel [show]="showPanelPicker"
        [model]="value"
        [hidden-day]="hiddenDay"
        (modelChange)="dateChangeHandle($event)">
      </el-data-picker-panel>
    </div>
  `,
})
export class ElDataPicker extends ElDatePickerProps implements OnInit, OnDestroy {
  
  showPanelPicker: boolean = false
  value: number
  globalClickListener: Function
  globalKeydownListener: Function
  iconShowClose: boolean = false
  
  constructor(
    private dateFormat: DateFormat,
    private renderer: Renderer2,
  ) {
    super()
  }
  
  iconMouseActionHandle(t: boolean): void {
    if (!this.clearable) return
    this.iconShowClose = this.model && t
  }
  
  
  iconClickHandle(e: Event): void {
    this.iconClick.emit(e)
    if (this.disabled) return
    // use close action
    if (this.iconShowClose) {
      this.clearClick.emit(e)
      this.model = null
      this.value = Date.now()
      this.showPanelPicker = false
      this.iconShowClose = false
      return
    }
    // toggle action
    this.showPanelPicker = !this.showPanelPicker
  }
  
  propagationHandle(event: Event): void {
    event.stopPropagation()
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
    this.showPanelPicker = false
  }
  
  focusHandle(): void {
    this.showPanelPicker = true
    this.globalKeydownListener && this.globalKeydownListener()
    this.globalKeydownListener = this.renderer.listen(
    'document', 'keydown', (event: KeyboardEvent) => {
      if (event.keyCode === 9 || event.keyCode === 27) {
        this.showPanelPicker = false
        this.globalKeydownListener && this.globalKeydownListener()
      }
    })
  }
  
  // text to time
  ngOnInit(): void {
    this.globalClickListener = this.renderer.listen(
    'document', 'click', () => {
      if (!this.showPanelPicker) return
      this.showPanelPicker = false
    })
    // init value
    const time: number = this.dateFormat.getTime(this.model)
    if (!time) return
    this.model = DateFormat.moment(time, this.format)
    this.value = time
  }
  
  ngOnDestroy(): void {
    this.globalClickListener && this.globalClickListener()
    this.globalKeydownListener && this.globalKeydownListener()
  }
  
}
