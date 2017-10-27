import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-date-picker',
  templateUrl: './date-picker.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExDatePickerComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Switch 开关', link: '/form/switch' },
    next: { name: 'Slider 滑块', link: '/form/slider' },
  }
  private exClass: any = class {
    handle(time: string): void {
      // [time] is string
      // date style follow format props
      console.log(time)
    }
    clearClickHandle(e: Event): void {
      console.log('clear', e)
    }
  }
  
}
