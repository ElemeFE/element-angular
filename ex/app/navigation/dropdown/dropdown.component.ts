import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExDropdownComponent {
  
  exClass: new () => {} = class {
    data: any[] = [{
      value: 'huangjingao',
      label: '黄金糕',
    }, {
      value: 'shizitou',
      label: '狮子头',
    }, {
      value: 'luosifen',
      label: '螺蛳粉',
    }]
    data2: any[] = [{
      value: 'huangjingao',
      label: '黄金糕',
    }, {
      value: 'shizitou',
      label: '狮子头',
      elDisabled: true,
    }, {
      value: 'luosifen',
      label: '螺蛳粉',
    }]
    data3: any[] = [{
      value: 'huangjingao',
      label: '黄金糕',
    }, {
      value: 'shizitou',
      label: '狮子头',
      divided: true,
    }, {
      value: 'luosifen',
      label: '螺蛳粉',
    }]
    
    handle(event: any): void {
      console.log(event)
    }
  }
  code: string[] = code
  page: any = {
    previous: { name: 'Steps 步骤条', link: '/nav/steps' },
    next: { name: 'Tooltip 文字提示', link: '/others/tooltip' },
  }
  
}
