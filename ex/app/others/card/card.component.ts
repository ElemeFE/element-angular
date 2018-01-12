import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExCardComponent {
  
  code: string[] = code
  exClass: any = class {
    currentDate(): Date {
      return new Date()
    }
  }
  page: any = {
    previous: { name: 'Tooltip 文字提示', link: '/others/tooltip' },
    next: { name: 'Dialog 对话框', link: '/others/dialog' },
  }

}
