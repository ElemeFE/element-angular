import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-table-demo',
})
export class ExTableDemoComponent {
  private tableData: any[] = [{
    name: '火锅',
    date: '2017-08-19',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '重庆小面',
    date: '2017-08-20',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '海蛎煎',
    date: '2017-08-21',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    name: '榴莲酥',
    date: '2017-08-22',
    address: '上海市普陀区金沙江路 1510 弄',
  }]
  private tableDataMore: any[] = []
  
  constructor() {
    this.tableDataMore = this.tableData.concat(this.tableData)
  }
  
  rowClassNameFilter(row: any, index: number): string {
    if (index === 1) {
      return 'info-row';
    } else if (index === 3) {
      return 'positive-row';
    }
    return ''
  }
  
  handle(ref: any): any {
    // console.log(ref.index)
    // console.log(ref.rowData)
    // console.log(ref.innerHTML)
    ref.destroy()
  }
  
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
