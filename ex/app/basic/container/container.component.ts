import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

export class Demo implements OnInit {
  
  visible: boolean = true
  
  ngOnInit(): void {
    setTimeout(() => {
      this.visible = false
    }, 1000)
  }
}

@Component({
  selector: 'ex-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExContainerComponent {
  
  exClass: any = Demo
  page: any = {
    previous: { name: '布局', link: '/guide/log' },
    next: { name: 'Color 色彩', link: '/basic/color' },
  }
  code: string[] = code
}
