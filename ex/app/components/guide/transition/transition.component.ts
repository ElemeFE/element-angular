import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss'],
})
export class ExTransitionComponent implements OnInit {
  
  private page: any = {
    previous: { name: '自定义主题', link: '/guide/theme' },
    next: { name: '更新日志', link: '/guide/log' },
  }
  constructor(
  ) {
  }
  
  ngOnInit(): void {
  }
}
