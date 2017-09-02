import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExTagComponent implements OnInit {
  
  private code: string[] = code
  private tags: string[] = ['123', '234234', '0011']
  private page: any = {
    previous: { name: 'Rate 评分', link: '/form/rate' },
    next: { name: 'Progress 输入框', link: '/data/progress' },
  }
  
  handle(): void {
    this.tags.pop()
  }
  
  ngOnInit(): void {
  }
}
