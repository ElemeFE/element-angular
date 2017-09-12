import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExPaginationComponent {
  
  private code: string[] = code
  private tags: string[] = ['123', '234234', '0011']
  private page: any = {
    previous: { name: 'Badge 标记', link: '/data/badge' },
    next: { name: 'Loading 加载', link: '/notice/loading' },
  }
  
  handle(): void {
    this.tags.pop()
  }
  
}
