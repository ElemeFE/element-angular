import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-table-demo',
})
export class ExTableDemoComponent {
  private tableData: any[] = [{
    name: '水爷',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '水爷',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }]
}

@Component({
  selector: 'ex-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExTableComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Rate 评分', link: '/form/rate' },
    next: { name: 'Progress 输入框', link: '/data/progress' },
  }
  private exClass: any = ExTableDemoComponent
  
}
