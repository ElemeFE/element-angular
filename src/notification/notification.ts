import { Component } from '@angular/core'
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'
import { Animation } from '../shared'

@Component({
  selector: 'el-notification-container',
  template: `
  `,
  animations: [Animation.slideAnimation]
})
export class ElNotificationContainer {
  
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
