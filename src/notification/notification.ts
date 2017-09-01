import { Component } from '@angular/core'
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'
import { Animation } from '../shared'

@Component({
  selector: 'el-notification-container',
  template: `
    <div [class]="'el-notification ' + customClass"
      style="display: none;"
      [@notifyAnimation]="showBox" [ngStyle]="{top: (top ? top + 'px' : 'auto'), 'z-index': zIndex}"
      (mouseenter)="clearTimer()" (mouseleave)="startTimer()"
      (click)="clickHnadle()">
      <i [class]="typeClass + ' el-notification__icon ' + iconClass"
        *ngIf="type || iconClass"></i>
      <div [class]="'el-notification__group' + (typeClass || iconClass ? 'is-with-icon' : '')">
        <h2 class="el-notification__title">{{title}}</h2>
        <div class="el-notification__content">{{message}}</div>
        <div class="el-notification__closeBtn el-icon-close" (click)="close()"></div>
      </div>
    </div>
  `,
  animations: [Animation.notifyAnimation]
})
export class ElNotificationContainer {
  
  // element id, for destroy com
  id: string
  top: number = 100
  
  // user setting
  type: string = 'info'
  duration: number = 30000
  iconClass: string = ''
  customClass: string = ''
  zIndex: number = 1000
  
  private message: string = ''
  private showBox: boolean = false
  private timer: any
  
  onClose: Function = () => {}
  onDestroy: Function = () => {}
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  show(message: string): void {
    this.message = message
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
  
  clickHnadle(): void {
  
  }
  
  private startTimer(): void {
    if (!this.showBox) return
    this.timer = setTimeout(() => {
      this.close()
    }, this.duration)
  }
  
  private clearTimer(): void {
    this.timer && clearTimeout(this.timer)
  }
  
}
