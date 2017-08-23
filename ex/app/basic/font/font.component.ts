import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.scss'],
})
export class ExFontComponent implements OnInit {
  
  private page: any = {
    previous: { name: 'Color 色彩', link: '/basic/color' },
    next: { name: 'Button 按钮', link: '/basic/button' },
  }
  
  ngOnInit(): void {
  }
}
