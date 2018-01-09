import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core'
import code from './code'
import { UserSafeHooks } from '../../../../src/tree/tree'

class DemoClass implements AfterViewInit {
  @ViewChild('tree') tree: ElementRef
  hooks: UserSafeHooks
  
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
  
  removeHandle(): void {
    this.hooks.removeAllChecked()
  }
  
  ngAfterViewInit(): void {
    this.hooks = (<any>this.tree).userSafeHooks()
  }
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
