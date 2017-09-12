import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExRateComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Slider 滑块', link: '/form/slider' },
    next: { name: 'Tag 标签', link: '/data/tag' },
  }
  
}
