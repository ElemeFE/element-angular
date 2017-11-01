import { ComponentRef, Injectable, Optional } from '@angular/core'
import { ElNotificationContainer } from './notification'
import { ExDynamicService } from '../shared/services'

export interface Options {
  type?: string
  offset?: number
  position?: string
  iconClass?: string
  customClass?: string
  duration?: number
  showClose?: boolean
  zIndex?: number
  onClose?: Function
}

@Injectable()
export class ElNotificationService {
  
  components: any[] = []
  
  constructor(
    @Optional() private root: ElNotificationContainer,
    private dynamic: ExDynamicService
  ) {
    this.createComponent()
  }
  
  show(msg: string, title?: string): void {
    const len = this.components.length
    if (len === 0 || this.components[len - 1].init) {
      this.createComponent()
    }
    
    // mark the component
    const currentLen = this.components.length
    const current = this.components[currentLen - 1]
    current.init = true
    current.instance.setContent(msg, title)
    
    // init current component
    if (currentLen > 1) {
      const lastInstance = this.components[currentLen - 2].instance
      current.instance.offset = lastInstance.height + lastInstance.offset + 15
    }
    
    current.instance.onDestroy = () => {
      const index = this.components.findIndex(com => com.id === current.id)
      
      // reflow top style
      this.components.forEach((com, i) => {
        if (i <= index) return
        com.instance.offset = com.instance.offset - current.instance.height - 15
      })
      // component detach and remove element
      this.dynamic.destroy(current.copy)
      // remove empty item
      this.components.splice(index, 1)
    }
    
    const timer = setTimeout(() => {
      current.instance.show()
      clearTimeout(timer)
    }, 0)
  }
  
  success(msg: string, title?: string): void {
    this.setOptions({ type: 'success' })
    this.show(msg, title)
  }
  
  warning(msg: string, title?: string): void {
    this.setOptions({ type: 'warning' })
    this.show(msg, title)
  }
  
  info(msg: string, title?: string): void {
    this.setOptions({ type: 'info' })
    this.show(msg, title)
  }
  
  error(msg: string, title?: string): void {
    this.setOptions({ type: 'error' })
    this.show(msg, title)
  }
  
  setOptions(options: Options): void {
    if (this.components.length === 0 || this.components[this.components.length - 1].init) {
      this.createComponent()
    }
    const last = this.components[this.components.length - 1]
    last.instance = Object.assign(last.instance, options)
  }
  
  createComponent(): void {
    const com: ComponentRef<any> = this.dynamic.generator(ElNotificationContainer)
    this.components.push({
      instance: com.instance,
      id: com.instance.id,
      copy: com,
      init: false
    })
  }
  
}
