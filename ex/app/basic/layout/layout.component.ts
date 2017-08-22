import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'ex-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExLayoutComponent implements OnInit {
  
  private page: any = {
    previous: { name: '更新日志', link: '/guide/log' },
    next: { name: 'Button 按钮', link: '/basic/button' },
  }
  
  ngOnInit(): void {
  }
}
