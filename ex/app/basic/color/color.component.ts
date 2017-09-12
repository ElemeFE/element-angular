import { Component } from '@angular/core'

@Component({
  selector: 'ex-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ExColorComponent {
  
  private page: any = {
    previous: { name: 'Layout 布局', link: '/basic/layout' },
    next: { name: 'Typography 字体', link: '/basic/font' },
  }
  
}
