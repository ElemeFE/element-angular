import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExMenuComponent {
  
  code: any[] = code
  page: any = {
    previous: { name: 'Notification 通知', link: '/notice/notification' },
    next: { name: 'Breadcrumb 面包屑', link: '/nav/breadcrumb' },
  }
  
  exClass: any = class {
    isCollapse: boolean = true
  
    handle(index: string): void {
      console.log(index)
    }
  }
  
}
