import { NgModule, ModuleWithProviders, ViewContainerRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Services } from '../shared'

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule],
  entryComponents: [],
})
export class ElSharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElSharedModule, providers: [
      Services.ExDynamicService,
    ] }
  }
}
