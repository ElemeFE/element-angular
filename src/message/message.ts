import { Component } from '@angular/core'
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'
import * as Icons from './images'
import { slideAnimation } from '../shared/animation'

@Component({
  selector: 'el-message-container',
  template: `
    <div [class]="'el-message ' + customClass + (type && !iconClass ? ' el-message--' + type : '')"
      [class.is-center]="center"
      style="visibility: hidden;" role="alertdialog"
      [ngStyle]="{ 'z-index': zIndex }"
      (mouseenter)="clearTimer()" (mouseleave)="startTimer()"
      [@slideAnimation]="showBox">
      <i [class]="iconClass" *ngIf="iconClass"></i>
      <i [class]="makeTypeClass()" *ngIf="!iconClass"></i>
      
      <p class="el-message__content" tabindex="0">{{ message }}</p>
      <div *ngIf="showClose" class="el-message__closeBtn el-icon-close" (click)="close()" role="button"></div>
    </div>
  `,
  animations: [slideAnimation]
})
export class ElMessageContainer {
  
  // element id, for destroy com
  id: string
  
  showClose: boolean = false
  type: string = 'info'
  center: boolean = false
  duration: number = 3000
  // user setting
  iconClass: string = ''
  customClass: string = ''
  zIndex: number = 1000
  
  message: string = ''
  showBox: boolean = false
  timer: any
  
  onClose: Function = () => {}
  onDestroy: Function = () => {}
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  makeTypeClass(): string {
    return this.type && !this.iconClass ? `el-message__icon el-icon-${this.type}` : ''
  }
  
  makeLink(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(Icons[this.type])
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
