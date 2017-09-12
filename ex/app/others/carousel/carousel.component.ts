import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExCarouselComponent {
  
  private code: string[] = code
  private exClass: any = class {
  }
  private page: any = {
    previous: { name: 'Dialog 对话框', link: '/others/dialog' },
    next: { name: 'Collapse 折叠面板', link: '/others/collapse' },
  }
  
}
