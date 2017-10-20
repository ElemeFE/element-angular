

import { EventEmitter, Input, Output } from '@angular/core'

export class ElDatePickerProps {
  
  @Input() readonly: boolean = false
  @Input() disabled: boolean = false
  @Input() editable: boolean = true
  @Input() clearable: boolean = true
  
  @Input() size: string                 // enum: large, small, mini
  @Input() align: string = 'left'                // enum: left, center, right
  @Input() type : string = 'date'                // enum: year/month/date/week/datetime/datetimerange/daterange
  @Input() placeholder: string = '选择日期'
  @Input() format: string = 'yyyy-MM-dd'
  @Input('hidden-day') hiddenDay: boolean = false
  
  // @Input() disabledDateFilter: Function
  
  @Input() model: string
  @Output() modelChange: EventEmitter<string> = new EventEmitter<string>()
  
}
