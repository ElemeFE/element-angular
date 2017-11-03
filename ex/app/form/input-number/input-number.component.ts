import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExInputNumberComponent {
  
  private exClass: any = class {
    val: number = 5
  
    changeHandle(event: number): void {
      console.log(event)
    }
  }
  private code: string[] = code
  private page: any = {
    previous: { name: 'Input 输入框', link: '/form/input' },
    next: { name: 'Select 选择器', link: '/form/select' },
  }
  
}
