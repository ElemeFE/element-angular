import { Component, ElementRef, OnInit } from '@angular/core'
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'
import { Animation } from '../shared'

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
      style="display: none;"
      [@notifyAnimation]="showBox" [ngStyle]="{top: (top ? top + 'px' : 'auto'), 'z-index': zIndex}"
      (mouseenter)="clearTimer()" (mouseleave)="startTimer()"
      (click)="clickHnadle()">
      <i [class]="makeClass() + ' el-notification__icon ' + iconClass"
        *ngIf="type || iconClass"></i>
      <div [class]="((makeClass() || iconClass) ? 'is-with-icon' : '') + ' el-notification__group'">
        <h2 class="el-notification__title" *ngIf="title">{{title}}</h2>
        <div class="el-notification__content">{{message}}</div>
        <div class="el-notification__closeBtn el-icon-close" (click)="close()"></div>
      </div>
    </div>
  `,
  animations: [Animation.notifyAnimation]
})
export class ElNotificationContainer implements OnInit {
  
  // element id, for destroy com
  id: string
  top: number = 100
  
  // user setting
  type: string = 'info'
  duration: number = 30000
  iconClass: string = ''
  customClass: string = ''
  zIndex: number = 1000
  
  private title: string = ''
  private message: string = ''
  private showBox: boolean = false
  private timer: any
  
  onClose: Function = () => {}
  onDestroy: Function = () => {}
  
  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {
  }
  
  makeClass(): string {
    return typeMap[this.type] ? `el-icon-${typeMap[this.type]}` : ''
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
  
  ngOnInit(): void {
    console.log(this.el.nativeElement)
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
