import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExRateComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'DatePicker 日期选择器', link: '/form/date-picker' },
    next: { name: 'Tag 标签', link: '/data/tag' },
  }
  
  ngOnInit(): void {
  }
}
