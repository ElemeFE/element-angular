import { Component, forwardRef, Inject, ViewEncapsulation } from '@angular/core'
import { ElNotificationService } from '../../../../src/element-angular.module'
import code from './code'

@Component({
  selector: 'ex-notification-demo',
  template: ` `,
})
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
  encapsulation: ViewEncapsulation.None,
})
export class ExNotificationComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Message 消息', link: '/notice/message' },
    next: { name: 'Alert 警告', link: '/notice/alert' },
  }
  private exClass: any = ExNotificationDemoComponent
  
  constructor(
  ) {
  }
  
}
