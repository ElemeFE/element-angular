import { Component } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-radio',
  templateUrl: './radio.component.html',
})
export class ExRadioComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Button 按钮', link: '/form/radio' },
    next: { name: 'Checkbox 多选框', link: '/form/checkbox' },
  }
  
}
