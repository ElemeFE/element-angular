import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExBadgeComponent implements OnInit {
  
  private code: string[] = code
  private tags: string[] = ['123', '234234', '0011']
  private page: any = {
    previous: { name: 'Progress 进度条', link: '/data/progress' },
    next: { name: 'Loading 加载', link: '/notice/loading' },
  }
  
  handle(): void {
    this.tags.pop()
  }
  
  ngOnInit(): void {
  }
}
