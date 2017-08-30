import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'ex-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExLogComponent implements OnInit {
  
  private page: any = {
    previous: { name: '更新日志', link: '/guide/log' },
    next: { name: 'Layout 布局', link: '/basic/layout' },
  }
  
  constructor(
  ) {
  }
  
  ngOnInit(): void {
  }
}
