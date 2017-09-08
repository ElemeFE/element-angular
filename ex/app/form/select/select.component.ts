import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-select',
  templateUrl: './select.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExSelectComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'InputNumber 计数器', link: '/form/input-number' },
    next: {  name: 'Cascader 级联选择器', link: '/form/cascader' },
  }
  
  ngOnInit(): void {
  }
}
