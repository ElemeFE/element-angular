import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExSelectComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'InputNumber 计数器', link: '/form/input-number' },
    next: { name: 'Switch 开关', link: '/form/switch' },
  }
  
  ngOnInit(): void {
  }
}
