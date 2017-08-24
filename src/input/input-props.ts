import { Input } from '@angular/core'

export class ElInputPoprs {
  
  @Input() type: string = 'text'      // input type. enum: text/textarea
  @Input() value: string | number     // bind value
  @Input() maxlength: number
  @Input() minlength: number
  @Input() placeholder: string
  @Input() disabled: boolean = false
  @Input() size: string               // only type === 'textarea'. enum: large, small, mini
  @Input() rows: number = 2           // only type === 'textarea'
  @Input() icon: string
  @Input() autosize: any = false      // only type === 'textarea'. example: { minRows: 2, maxRows: 6 }
  @Input('on-icon-click') iconClick: Function   // handle on the input icon
  
  // native attrs
  @Input('auto-complete') autoComplete: string = 'off'
  @Input() name: string
  @Input() readonly: boolean = false
  @Input() max: string | number
  @Input() min: string | number
  @Input() step: any
  @Input() autofocus: boolean = false
  @Input() form: string
  
}
