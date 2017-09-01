import { ComponentRef, Injectable, Optional } from '@angular/core'
import { ElNotificationContainer } from './notification'
import { Services } from '../shared'

export interface Options {
  type?: string
  iconClass?: string
  customClass?: string
  duration?: number
  showClose?: boolean
  zIndex?: number
  onClose?: Function
}

@Injectable()
export class ElNotificationService {
  
  private components: any[] = []
  
  constructor(
    @Optional() private root: ElNotificationContainer,
    private dynamic: Services.ExDynamicService
  ) {
    this.createComponent()
  }
  
  show(msg: string): void {
    if (this.components.length === 0 || this.components[this.components.length - 1].init) {
      this.createComponent()
    }
    // mark the component
    const current = this.components[this.components.length - 1]
    current.init = true
  
    current.instance.onDestroy = () => {
      // component detach and destroy
      this.dynamic.destroy(current.copy)
      // remove empty item
      const index = this.components.findIndex(com => com.id === current.id)
      this.components.splice(index, 1)
    }
    const timer = setTimeout(() => {
      current.instance.show(msg)
      clearTimeout(timer)
    }, 0)
  }
  
  success(msg: string): void {
    this.setOptions({ type: 'success' })
    this.show(msg)
  }
  
  warning(msg: string): void {
    this.setOptions({ type: 'warning' })
    this.show(msg)
  }
  
  info(msg: string): void {
    this.setOptions({ type: 'info' })
    this.show(msg)
  }
  
  error(msg: string): void {
    this.setOptions({ type: 'error' })
    this.show(msg)
  }
  
  setOptions(options: Options): void {
    if (this.components.length === 0 || this.components[this.components.length - 1].init) {
      this.createComponent()
    }
    const last = this.components[this.components.length - 1]
    last.instance = Object.assign(last.instance, options)
  }
  
  private createComponent(): void {
    const com: ComponentRef<any> = this.dynamic.generator(ElNotificationContainer)
    this.components.push({
      instance: com.instance,
      id: com.instance.id,
      copy: com,
      init: false
    })
  }
  
}
