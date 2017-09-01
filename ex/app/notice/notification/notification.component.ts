import { Component, forwardRef, Inject, ViewEncapsulation } from '@angular/core'
import { ElNotificationService } from '../../../../src/index'
import code from './code'

@Component({ selector: 'ex-notification-demo' })
export class ExNotificationDemoComponent {
  
  constructor(
    @Inject(forwardRef(() => ElNotificationService)) private notify: any,
  ) {
  }
  
  handle(): void {
    this.notify.show('这是一条消息提示')
  }
  
  handle2(): void {
    this.notify.show('这是一条消息提示', '消息标题')
  }
  
  handle3(type: string): void {
    this.notify[type]('这是一条消息提示: ' + type, type)
  }
  
}

@Component({
  selector: 'ex-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExNotificationComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Message 消息', link: '/notice/message' },
    next: { name: 'Loading 加载', link: '/notice/loading' },
  }
  private exClass: any = ExNotificationDemoComponent
  
  constructor(
  ) {
  }
  
}
