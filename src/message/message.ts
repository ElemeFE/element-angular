import { Component, OnInit } from '@angular/core'
import * as Icons from './images'
import { Animation } from '../shared'
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'el-message-container',
  template: `
    <div [class]="'el-message' + customClass"
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
  animations: [Animation.slideAnimation]
})
export class ElMessageContainer implements OnInit {
  
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
      this.showBox = false
      clearTimeout(this.timer)
    }, this.duration)
  }
  
  close(): void {
    this.showBox = false
    this.timer && clearTimeout(this.timer)
  }
  
  ngOnInit(): void {
  }
  
  private startTimer(): void {
  
  }
  
  private clearTimer(): void {
  
  }
  
}
