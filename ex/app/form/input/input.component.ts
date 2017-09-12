import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExInputComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Check 多选框', link: '/form/checkbox' },
    next: { name: 'InputNumber 计数器', link: '/form/input-number' },
  }
  
}
