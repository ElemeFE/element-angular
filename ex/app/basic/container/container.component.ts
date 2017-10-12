import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExContainerComponent {
  
  private page: any = {
    previous: { name: '布局', link: '/guide/log' },
    next: { name: 'Color 色彩', link: '/basic/color' },
  }
  private code: string[] = code
}
