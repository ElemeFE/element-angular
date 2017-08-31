import {
  ApplicationRef,
  CompilerFactory, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector,
  Optional,
} from '@angular/core'
import { ElMessageContainer } from './message'

@Injectable()
export class DocumentWrapper extends Document {
}
@Injectable()
export class WindowWrapper extends Window {
}

@Injectable()
export class ElMessageService {
  
  constructor(
    private document: DocumentWrapper,
    private window: WindowWrapper,
    @Optional() private root: ElMessageContainer,
    private factory: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {
    this.createComponent(ElMessageContainer)
  }
  
  send(msg: string, options: any): void {
    
  }
  
  private createComponent(Container: any): void {
    const component: ComponentRef<any> = this.factory
      .resolveComponentFactory(Container)
      .create(this.injector)
    this.appRef.attachView(component.hostView)
    
    const hostElement: HTMLElement = this.document.createElement('div')
    hostElement.appendChild((<any>component.hostView).rootNodes[0])
    this.document.body.appendChild(hostElement)
  }
}


