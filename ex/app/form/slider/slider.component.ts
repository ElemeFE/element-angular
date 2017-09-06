import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExSliderComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Switch 开关', link: '/form/switch' },
    next: { name: 'Rate 评分', link: '/form/rate' },
  }
  private exClass: any = class {
    handle(val: any): void {
    }
  }
  
  ngOnInit(): void {
  }
}
