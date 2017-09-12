import { Component } from '@angular/core'

@Component({
  selector: 'ex-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss'],
})
export class ExFontComponent {
  
  private page: any = {
    previous: { name: 'Color 色彩', link: '/basic/color' },
    next: { name: 'Button 按钮', link: '/basic/button' },
  }
  
}
