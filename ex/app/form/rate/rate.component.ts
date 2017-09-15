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
    next: { name: 'Upload 上传', link: '/form/upload' },
  }
  
}
