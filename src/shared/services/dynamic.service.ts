
import {
  Compiler, Injectable, ViewContainerRef, Component, NgModule,
  ModuleWithComponentFactories, ReflectiveInjector, ComponentRef,
} from '@angular/core'
import { CommonModule } from '@angular/common'

@Injectable()
export class ExDynamicService {
  
  private comRef: ComponentRef<any>
  
  constructor(
    private vcRef: ViewContainerRef,
    private compiler: Compiler,
  ) {
  }
  
  generator(parentFactory: new () => {}): any {
    const decorated: any = Component(new Component({
      selector: 'el-dynamic-from-service-generator',
      template: '',
    }))(class DynamicComponent extends parentFactory {})
  
    @NgModule({
      imports: [CommonModule],
      declarations: [decorated],
    })
    class DynamicModule {}
  
    this.compiler.compileModuleAndAllComponentsAsync(DynamicModule)
      .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) =>
        moduleWithComponentFactory.componentFactories.find(x =>
          x.componentType === decorated))
      .then(factory => {
        const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector)
        this.comRef = this.vcRef.createComponent(factory, 0 , injector)
      })
    return this.comRef
  }
}
