import { EventEmitter, Input, Output } from '@angular/core'
export type Options = {
  label?: string,
  value: string,
  children?: Options[],
  disabled?: boolean,
}

export class ElCascaderPoprs {
  
  // input props
  @Input() disabled: boolean = false
  @Input() size: string
  @Input('popper-class') popperClass: string
  @Input() placeholder: string = '请选择'
  
  // data
  @Input() options: Options[]
  
  //
  @Input() clearable: boolean = false
  @Input('all-levels') allLevels: boolean = true
  
  
  // bind value
  @Input() model: any = ''
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
}
