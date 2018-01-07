import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

class DemoClass {
  data: any = [{
    label: '一级 1',
    children: [{
      label: '二级 1-1',
      children: [{
        label: '三级 1-1-1',
        checked: true,
      }]
    }]
  }, {
    label: '一级 2',
    children: [{
      label: '二级 2-1'
    }]
  }, {
    label: '一级 3',
  }]
}

@Component({
  selector: 'ex-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExTreeComponent {
  
  exClass: any = DemoClass
  code: string[] = code
  page: any = {
    previous: { name: 'Table 表格', link: '/data/table' },
    next: { name: 'Loading 加载', link: '/notice/loading' },
  }
  
}
