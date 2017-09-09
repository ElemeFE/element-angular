import { Component, OnInit, ViewEncapsulation } from '@angular/core'
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
    previous: { name: 'Check 多选框', link: '/form/checkbox' },
    next: { name: 'Message 消息提示', link: '/notice/message' },
  }
  
}
