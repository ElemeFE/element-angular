import { NgModule, ModuleWithProviders, Injectable } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Services } from '../shared'
export function getDocument(): any { return document }

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
      { provide: Services.DocumentWrapper, useFactory: getDocument },
    ]}
  }
}
