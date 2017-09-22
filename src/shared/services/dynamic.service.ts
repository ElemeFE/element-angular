
import {
  Injectable, ComponentRef, ComponentFactoryResolver, Injector, ApplicationRef,
} from '@angular/core'

@Injectable()
export class DocumentWrapper extends Document {
}

@Injectable()
export class WindowWrapper extends Window {
}

@Injectable()
export class ExDynamicService {
  
  constructor(
    private document: DocumentWrapper,
    private factory: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
  ) {
  }
  
  generator(Container: any): ComponentRef<any> {
    const id = this.makeID()
    const component: ComponentRef<any> = this.factory
      .resolveComponentFactory(Container)
      .create(this.injector)
    this.appRef.attachView(component.hostView)
  
    const hostElement: HTMLElement = this.document.createElement('div')
    hostElement.setAttribute('id', id)
    component.instance.id = id
    hostElement.appendChild((<any>component.hostView).rootNodes[0])
    this.document.body.appendChild(hostElement)
    
    return component
  }
  
  destroy(com: ComponentRef<any>): void {
    const timer = setTimeout(() => {
      this.destroyWait(com)
      clearTimeout(timer)
    }, 500)
  }
  
  destroyWait(com: ComponentRef<any>): void {
    const id = com.instance.id
    this.appRef.detachView(com.hostView)
    com.destroy()
    try {
      const hostElement = this.document.getElementById(id)
      hostElement && hostElement.parentElement.removeChild(hostElement)
    } catch (err) {}
  }
  
  makeID(): string {
    return Math.random().toString(16).substr(2, 8)
  }
  
}
