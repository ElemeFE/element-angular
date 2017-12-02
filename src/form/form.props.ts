import { Input } from '@angular/core'


export class ElFormProps {
  
  @Input() inline: boolean = false
  @Input('show-icon') showIcon: boolean = false
  @Input('show-message') showMessage: boolean = false
  @Input('inline-message') inlineMessage: boolean = false
  @Input('size') size: string
  
  // right / left / top
  @Input('label-position') labelPosition: string = 'right'
  @Input('label-width') labelWidth: string
  @Input('label-suffix') labelSuffix: string
  
}
