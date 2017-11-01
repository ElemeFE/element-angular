import { Component, ElementRef, OnInit } from '@angular/core'
import { notifyAnimation } from '../shared/animation'

export const typeMap: any = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
}

@Component({
  selector: 'el-notification-container',
  template: `
    <div [class]="'el-notification ' + horizontalDirection + ' ' + customClass"
      [@notifyAnimation]="showBox"
      [ngStyle]="{top: (offset ? offset + 'px' : 'auto'), 'z-index': zIndex}"
      style="visibility: hidden;"
      (mouseenter)="clearTimer()" (mouseleave)="startTimer()">
      <i [class]="'el-notification__icon ' + makeClass() + ' ' + iconClass"
        *ngIf="type || iconClass"></i>
      <div class="el-notification__group" [class.is-with-icon]="makeClass() || iconClass">
        <h2 class="el-notification__title" *ngIf="title">{{title}}</h2>
        <div class="el-notification__content"><p>{{message}}</p></div>
        <div class="el-notification__closeBtn el-icon-close" (click)="close()"></div>
      </div>
    </div>
  `,
  animations: [notifyAnimation]
})
export class ElNotificationContainer implements OnInit {
  
  // element id, for destroy com
  id: string
  height: number = 0
  
  // user setting
  offset: number = 15
  type: string = ''
  duration: number = 3000
  iconClass: string = ''
  customClass: string = ''
  zIndex: number = 1000
  position: string = 'top-right'
  
  title: string = ''
  message: string = ''
  showBox: boolean = false
  timer: any
  horizontalDirection: string = 'right'
  
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
  
  ngOnInit(): void {
    this.horizontalDirection = this.position.includes('right') ? 'right' : 'left'
  }
  
}
