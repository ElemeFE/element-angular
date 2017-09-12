import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExCollapseComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Carousel 走马灯', link: '/others/carousel' },
    next: { name: null, link: null },
  }

}
