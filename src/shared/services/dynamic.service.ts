
import {
  Injectable, ComponentRef, ComponentFactoryResolver, Injector, ApplicationRef, Component,
} from '@angular/core'

@Injectable()
export class DocumentWrapper extends Document {
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
  
  generator(Container: any): Component {
    const component: ComponentRef<any> = this.factory
      .resolveComponentFactory(Container)
      .create(this.injector)
    this.appRef.attachView(component.hostView)
  
    const hostElement: HTMLElement = this.document.createElement('div')
    hostElement.appendChild((<any>component.hostView).rootNodes[0])
    this.document.body.appendChild(hostElement)
    return component.instance
  }
}
