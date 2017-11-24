import { Component, forwardRef, Inject, ViewEncapsulation } from '@angular/core'
import { ElMessageService } from '../../../../src/element-angular.module'
import code from './code'

@Component({
  selector: 'ex-message-demo',
  template: ` `,
})
export class ExMessageDemoComponent {
  
  constructor(
    @Inject(forwardRef(() => ElMessageService)) private message: any,
  ) {
  }
  
  center(): void {
    this.message.setOptions({ center: true })
    this.message.info('一段居中显示的文字。')
  }
  
  handle(type: string = 'show'): void {
    this.message[type]('这是一条消息提示' + type)
  }
  
  handle2(type: string = 'show'): void {
    this.message.setOptions({ showClose: true })
    this.message[type]('这是一条可关闭的消息提示')
  }
}

@Component({
  selector: 'ex-message',
  templateUrl: './message.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExMessageComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Loading 加载', link: '/notice/loading' },
    next: { name: 'Notification 通知', link: '/notice/notification' },
  }
  private exClass: any = ExMessageDemoComponent
  
}
