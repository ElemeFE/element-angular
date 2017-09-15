import { EventEmitter, Input, Output } from '@angular/core'

export type Option = {
  label?: string,
  value: string,
  children?: Option[],
  disabled?: boolean,
  active?: boolean,
}

export class ElCascaderPoprs {
  
  // input props
  @Input() disabled: boolean = false
  @Input() size: string
  @Input() placeholder: string = '请选择'
  
  // data
  @Input() options: Option[]
  
  //
  @Input() clearable: boolean = false
  @Input('all-levels') allLevels: boolean = true
  @Input('change-on-select') changeOnSelect: boolean = false
  
  
  // bind value
  @Input() model: string[]
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
}
