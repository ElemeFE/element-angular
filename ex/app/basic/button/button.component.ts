import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExButtonComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Color 色彩', link: '/basic/color' },
    next: { name: 'Icon 图标', link: '/basic/icon' },
  }
  
}
