import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExBadgeComponent {
  
  code: string[] = code
  tags: string[] = ['123', '234234', '0011']
  page: any = {
    previous: { name: 'Progress 进度条', link: '/data/progress' },
    next: { name: 'Pagination 分页', link: '/data/pagination' },
  }
  
  handle(): void {
    this.tags.pop()
  }
  
}
