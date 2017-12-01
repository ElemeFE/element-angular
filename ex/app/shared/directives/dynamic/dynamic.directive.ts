import {
  Input, Directive, OnInit, Compiler, Component,
  ModuleWithComponentFactories, NgModule, ReflectiveInjector, ViewContainerRef, ComponentRef,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// Rendering ElComponent dependence
import { ElModule } from '../../../../../src/element-angular.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@Directive({
  selector: '[ex-dynamic]',
})
export class ElDynamicDirective implements OnInit {
  
  @Input('ex-dynamic') dynamicHtml: string
  @Input('class') parentClass: new ([string]?: any) => {} = class {}
  
  private comRef: ComponentRef<any>
  
  constructor(
    private vcRef: ViewContainerRef,
    private compiler: Compiler,
  ) {
  }
  
  ngOnInit(): void {
    if (!this.dynamicHtml) return
    const decorated: any = Component(new Component({
      selector: 'ex-dynamic-html',
      template: this.dynamicHtml,
    }))(class DynamicComponent extends this.parentClass {})
  
    @NgModule({
      imports: [CommonModule, RouterModule, ElModule, FormsModule, ReactiveFormsModule],
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
  }
  
}
