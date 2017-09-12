import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExAlertComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Notification 通知', link: '/notice/notification' },
    next: { name: 'NavMenu 导航菜单', link: '/nav/menu' },
  }
  private exClass: any = class {
    handle(): void {
      console.log('close')
    }
  }
  
}
