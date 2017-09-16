import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExTableComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Rate 评分', link: '/form/rate' },
    next: { name: 'Progress 输入框', link: '/data/progress' },
  }
  
}
