import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExCarouselComponent implements OnInit {
  
  private code: string[] = code
  private exClass: any = class {
  }
  private page: any = {
    previous: { name: 'Card 卡片', link: '/others/card' },
    next: { name: null, link: '' },
  }
  
  ngOnInit(): void {
  }
}
