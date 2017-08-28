import { EventEmitter, Input, Output } from '@angular/core'

export class ElRateProps {
  
  @Input() max: number = 5
  @Input() colors: string[] = ['#F7BA2A', '#F7BA2A', '#F7BA2A']
  @Input('void-color') voidColor: string
  @Input('disabled-void-color') disabledVoidColor: string
  @Input() disabled: boolean = false
  @Input('allow-half') allowHalf: boolean = false
  @Input('low-threshold') lowThreshold: number = 2
  @Input('high-threshold') highThreshold: number = 4
  @Input('icon-classes') iconClasses: string[] = ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on']
  @Input('void-icon-class') voidIconClass: string
  @Input('disabled-void-icon-class') disabledVoidIconClass: string
  
  @Input('show-text') showText: boolean = false
  @Input('text-color') textColor: string
  @Input() texts: string[]
  
  // bind value
  @Input() model: number = 0
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
}
