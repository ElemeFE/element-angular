import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core'
import code from './code'
import { UserSafeHooks } from '../../../../src/tree/tree'

class DemoClass implements AfterViewInit {
  @ViewChild('tree') tree: ElementRef
  hooks: UserSafeHooks
  
  data: any = [{
    label: '一级 1',
    id: '1.1.1',
    children: [{
      label: '二级 1-1',
      id: '2.1.1',
      children: [{
        id: '3.1.1',
        label: '三级 1-1-1',
      }]
    }]
  }, {
    label: '一级 2',
    id: '1.2.1',
    children: [{
      id: '2.2.1',
      label: '二级 2-1',
    }]
  }, {
    id: '1.3.1',
    label: '一级 3',
  }]
  data2: any = [{
    label: '一级 1',
    id: '1.1.1',
    expanded: true,
    children: [{
      label: '二级 1-1',
      id: '2.1.1',
      children: [{
        id: '3.1.1',
        label: '三级 1-1-1',
        checked: true,
      }]
    }]
  }, {
    label: '一级 2',
    id: '1.2.1',
    children: [{
      id: '2.2.1',
      label: '二级 2-1',
    }]
  }, {
    id: '1.3.1',
    label: '一级 3',
  }]
  data3: any = Object.assign([], this.data2)
  
  findAllChecked(): void {
    console.log(this.hooks.findAllChecked())
  }
  
  removeAllChecked(): void {
    this.hooks.removeAllChecked()
  }
  
  updateItemChecked(): void {
    this.hooks.updateItemChecked('1.3.1')
  }
  
  updateItemExpanded(): void {
    this.hooks.updateItemExpanded('1.2.1')
  }
  
  ngAfterViewInit(): void {
    if (!this.tree) return
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
