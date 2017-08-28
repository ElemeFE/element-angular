import { EventEmitter, Input, Output } from '@angular/core'

export class ElRateProps {
  
  @Input() max: number = 5
  @Input() disabled: boolean = false
  
  // color and class
  @Input() colors: string[] = ['#F7BA2A', '#F7BA2A', '#F7BA2A']
  @Input('void-color') voidColor: string = '#C6D1DE'
  
  @Input('icon-classes') iconClasses: string[] = ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on']
  @Input('void-icon-class') voidIconClass: string = 'el-icon-star-off'
  
  @Input('disabled-void-color') disabledVoidColor: string = '#EFF2F7'
  @Input('disabled-void-icon-class') disabledVoidIconClass: string = 'el-icon-star-on'
  
  
  // @Input('allow-half') allowHalf: boolean = false
  @Input('low-threshold') lowThreshold: number = 2
  @Input('high-threshold') highThreshold: number = 4
  
  // show text
  @Input('show-text') showText: boolean = false
  @Input('text-color') textColor: string = '#1F2D3D'
  @Input() texts: string[] = ['极差', '失望', '一般', '满意', '惊喜']
  
  // bind value
  @Input() model: number = 0
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
}
