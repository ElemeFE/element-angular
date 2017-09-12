import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExDropdownComponent {
  
  private exClass: new () => {} = class {
    
    private data: any[] = [{
      value: 'huangjingao',
      label: '黄金糕',
    }, {
      value: 'shizitou',
      label: '狮子头',
    }, {
      value: 'luosifen',
      label: '螺蛳粉',
    }]
    private data2: any[] = [{
      value: 'huangjingao',
      label: '黄金糕',
    }, {
      value: 'shizitou',
      label: '狮子头',
      disabled: true,
    }, {
      value: 'luosifen',
      label: '螺蛳粉',
    }]
    private data3: any[] = [{
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
    
    handle(): void {
    }
  }
  private code: string[] = code
  private page: any = {
    previous: { name: 'Steps 步骤条', link: '/nav/steps' },
    next: { name: 'Tooltip 文字提示', link: '/others/tooltip' },
  }
  
}
