import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElContainer } from './container'
import { ElContainerDirective } from './container.directive'
import { ElHeader, ElAside, ElMain, ElFooter } from './children'
import { ElAsideDirective, ElFooterDirective, ElHeaderDirective, ElMainDirective } from './directives'


@NgModule({
  declarations: [
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElFooter,
    ElContainerDirective,
    ElHeaderDirective,
    ElMainDirective,
    ElFooterDirective,
    ElAsideDirective,
  ],
  exports: [
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElFooter,
    ElContainerDirective,
    ElHeaderDirective,
    ElMainDirective,
    ElFooterDirective,
    ElAsideDirective,
  ],
  imports: [CommonModule],
  entryComponents: [ElContainer],
})
export class ElContainerModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElContainerModule, providers: [] }
  }
}
