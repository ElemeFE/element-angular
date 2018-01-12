import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExPaginationComponent {
  
  code: string[] = code
  tags: string[] = ['123', '234234', '0011']
  page: any = {
    previous: { name: 'Badge 标记', link: '/data/badge' },
    next: { name: 'Table 表格', link: '/data/table' },
  }
  
  handle(): void {
    this.tags.pop()
  }
  
}
