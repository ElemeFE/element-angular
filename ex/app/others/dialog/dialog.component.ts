import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-dialog',
  templateUrl: './dialog.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExDialogComponent {
  
  private code: string[] = code
  private exClass: any = class {
    handle(done: Function): void {
      alert('一段同步或异步的任务')
      done()
    }
  }
  private page: any = {
    previous: { name: 'Card 卡片', link: '/others/card' },
    next: { name: 'Carousel 走马灯', link: '/others/carousel' },
  }

}
