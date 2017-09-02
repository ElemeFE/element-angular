import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExProgressComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Progress 进度条', link: '/data/progress' },
    next: { name: 'Loading 加载', link: '/notice/loading' },
  }
  
  ngOnInit(): void {
  }
}
