import { Component } from '@angular/core'
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'
import * as Icons from './images'
import { slideAnimation } from '../shared/animation'

@Component({
  selector: 'el-message-container',
  template: `
    <div [class]="'el-message ' + customClass"
      style="display: none;"
      [ngStyle]="{ 'z-index': zIndex }"
      (mouseenter)="clearTimer()" (mouseleave)="startTimer()"
      [@slideAnimation]="showBox">
      <img class="el-message__img" [src]="makeLink()" *ngIf="!iconClass">
      <div class="el-message__group" [ngClass]="{'is-with-icon': !!iconClass}">
        <p><i class="el-message__icon" [class]="iconClass" *ngIf="iconClass"></i>{{ message }}</p>
        <div *ngIf="showClose" class="el-message__closeBtn el-icon-close" (click)="close()"></div>
      </div>
    </div>
  `,
  animations: [slideAnimation]
})
export class ElMessageContainer {
  
  // element id, for destroy com
  id: string
  
  showClose: boolean = false
  type: string = 'info'
  duration: number = 3000
  // user setting
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
