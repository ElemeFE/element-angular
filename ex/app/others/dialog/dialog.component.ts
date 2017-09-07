import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExDialogComponent implements OnInit {
  
  private code: string[] = code
  private exClass: any = class {
    handle(done: Function): void {
      alert('一段同步或异步的任务')
      done()
    }
  }
  private page: any = {
    previous: { name: 'Card 卡片', link: '/others/card' },
    next: { name: null, link: '' },
  }
  
  ngOnInit(): void {
  }
}
