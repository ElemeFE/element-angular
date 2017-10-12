import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElContainer } from './container'
import { ElHeader, ElAside, ElMain, ElFooter } from './children'


@NgModule({
  declarations: [ElContainer, ElHeader, ElAside, ElMain, ElFooter],
  exports: [ElContainer, ElHeader, ElAside, ElMain, ElFooter],
  imports: [CommonModule],
  entryComponents: [ElContainer],
})
export class ElContainerModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElContainerModule, providers: [] }
  }
}
