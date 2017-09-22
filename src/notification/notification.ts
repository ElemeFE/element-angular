import { Component, ElementRef } from '@angular/core'
import { notifyAnimation } from '../shared/animation'

export const typeMap: any = {
  success: 'circle-check',
  info: 'information',
  warning: 'warning',
  error: 'circle-cross',
}

@Component({
  selector: 'el-notification-container',
  template: `
    <div [class]="'el-notification ' + customClass"
      style="visibility: hidden;"
      [@notifyAnimation]="showBox" [ngStyle]="{top: (top ? top + 'px' : 'auto'), 'z-index': zIndex}"
      (mouseenter)="clearTimer()" (mouseleave)="startTimer()">
      <i [class]="makeClass() + ' el-notification__icon ' + iconClass"
        *ngIf="type || iconClass"></i>
      <div [class]="((makeClass() || iconClass) ? 'is-with-icon' : '') + ' el-notification__group'">
        <h2 class="el-notification__title" *ngIf="title">{{title}}</h2>
        <div class="el-notification__content">{{message}}</div>
        <div class="el-notification__closeBtn el-icon-close" (click)="close()"></div>
      </div>
    </div>
  `,
  animations: [notifyAnimation]
})
export class ElNotificationContainer {
  
  // element id, for destroy com
  id: string
  top: number = 15
  height: number = 0
  
  // user setting
  type: string = 'info'
  duration: number = 3000
  iconClass: string = ''
  customClass: string = ''
  zIndex: number = 1000
  
  title: string = ''
  message: string = ''
  showBox: boolean = false
  timer: any
  
  onClose: Function = () => {}
  onDestroy: Function = () => {}
  
  constructor(
    private el: ElementRef,
  ) {
  }
  
  makeClass(): string {
    return typeMap[this.type] ? `el-icon-${typeMap[this.type]}` : ''
  }
  
  setContent(message: string, title: string = ''): void {
    this.message = message
    this.title = title
    setTimeout(() => {
      this.height = this.el.nativeElement.children[0].offsetHeight
    }, 0)
  }
  
  show(): void {
    this.showBox = true
    this.timer = setTimeout(() => {
      this.close()
    }, this.duration)
  }
  
  close(): void {
    this.timer && clearTimeout(this.timer)
    this.showBox = false
    this.onClose()
    this.onDestroy()
  }
  
  startTimer(): void {
    if (!this.showBox) return
    this.timer = setTimeout(() => {
      this.close()
    }, this.duration)
  }
  
  clearTimer(): void {
    this.timer && clearTimeout(this.timer)
  }
  
}
