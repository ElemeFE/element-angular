import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExMenuComponent {
  
  private code: any[] = code
  private page: any = {
    previous: { name: 'Notification 通知', link: '/notice/notification' },
    next: { name: 'Breadcrumb 面包屑', link: '/nav/breadcrumb' },
  }
  
  private exClass: any = class {
    private isCollapse: boolean = true
  }
  
}
