import { EventEmitter, Input, Output } from '@angular/core'

export class ElSelectPoprs {
  
  @Input() disabled: boolean = false
  @Input() clearable: boolean = false
  @Input() name: string
  @Input() size: string               // enum: large, small, mini
  @Input() placeholder: string = '请选择'
  @Input('popper-class') popperClass: string
  
  // bind value
  @Input() model: any = ''
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
}
