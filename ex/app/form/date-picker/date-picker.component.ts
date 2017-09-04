import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExDatePickerComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Switch 开关', link: '/form/switch' },
    next: { name: 'Tag 标签', link: '/data/tag' },
  }
  
  ngOnInit(): void {
  }
}
