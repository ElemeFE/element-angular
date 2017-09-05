import { EventEmitter, Input, Output } from '@angular/core'
export type AutoSize = { minRows: number, maxRows: number }

export class ElInputPoprs {
  
  @Input() type: string = 'text'      // input type. enum: text/textarea
  @Input() value: string | number = ''    // init value
  @Input() maxlength: number
  @Input() minlength: number
  @Input() placeholder: string = ''
  @Input() disabled: boolean = false
  @Input() size: string               // only type === 'textarea'. enum: large, small, mini
  @Input() rows: number = 2           // only type === 'textarea'
  @Input() resize: string             // only type === 'textarea' enum: none, both, horizontal, vertical
  @Input() icon: string
  @Input() iconClass: string
  @Input() autosize?: AutoSize        // only type === 'textarea'. example: { minRows: 2, maxRows: 6 }
  
  // native attrs
  @Input('auto-complete') autoComplete: string = 'off'     // only type === 'text'
  @Input() name: string
  @Input() readonly: boolean = false
  // @Input() step: any
  @Input() autofocus: boolean = false
  @Input('class') parentClass: string
  // @Input() form: string
  
  // bind value
  @Input() model: any = ''
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  // hook
  @Output('icon-click') iconClick: EventEmitter<any> = new EventEmitter<any>()  // handle on the input icon
  @Output() focus: EventEmitter<any> = new EventEmitter<any>()
  @Output() blur: EventEmitter<any> = new EventEmitter<any>()
  @Output('icon-mouseenter') iconMouseEnter: EventEmitter<any> = new EventEmitter<any>()
  @Output('icon-mouseleave') iconMouseLeave: EventEmitter<any> = new EventEmitter<any>()
}
