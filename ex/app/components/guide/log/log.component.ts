import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'ex-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExLogComponent {
  
  private page: any = {
    previous: { name: '自定义主题', link: '/guide/theme' },
    next: { name: 'Layout 布局', link: '/basic/layout' },
  }
  
}
