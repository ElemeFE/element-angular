import { EventEmitter, Input, Output } from '@angular/core'

export class ElSelectPoprs {
  
  @Input() multiple: boolean = false
  @Input() disabled: boolean = false
  @Input() clearable: boolean = false
  @Input() name: string
  @Input() size: string               // enum: large, small, mini
  @Input() placeholder: string = '请选择'
  @Input('popper-class') popperClass: string
  @Input('multiple-limit') multipleLimit: number = 0     // 0 mean no limit
  @Input('no-data-text') noDataText: string = '无数据'
  
  @Input() filterable: boolean = false
  @Input() loading: boolean = false
  @Input('loading-text') loadingText: string = '加载中'
  @Input('no-match-text') noMatchText: string = '无匹配数据'
  @Input('allow-create') allowCreate: boolean = false
  @Input('default-first-option') defaultFirstOption: boolean = false
  @Input('filter-method') filterMethod: Function
  
  
  // bind value
  @Input() model: any = ''
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  @Output('visible-change') visibleChange: EventEmitter<any> = new EventEmitter<any>()
  @Output('remove-tag') removeTag: EventEmitter<any> = new EventEmitter<any>()
  @Output() clear: EventEmitter<any> = new EventEmitter<any>()
  
}
