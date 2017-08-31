import { Component, ComponentRef, Injectable, Optional } from '@angular/core'
import { ElMessageContainer } from './message'
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
export class ElMessageService {
  
  private componentInstance: any
  
  constructor(
    @Optional() private root: ElMessageContainer,
    private dynamic: Services.ExDynamicService
  ) {
    this.createComponent()
  }
  
  show(msg: string): void {
    this.componentInstance.show(msg)
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
    this.componentInstance = Object.assign(this.componentInstance, options)
  }
  
  private createComponent(): void {
    if (!this.componentInstance) {
      this.componentInstance = this.dynamic.generator(ElMessageContainer)
    }
  }
  
}


