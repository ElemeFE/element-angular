import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExLayoutComponent {
  
  private page: any = {
    previous: { name: '更新日志', link: '/guide/log' },
    next: { name: 'Color 色彩', link: '/basic/color' },
  }
  private code: string[] = code
}
