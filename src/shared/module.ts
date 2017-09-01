import { NgModule, ModuleWithProviders, Injectable } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExDynamicService, DocumentWrapper } from '../shared/services'
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
      ExDynamicService,
      { provide: DocumentWrapper, useFactory: getDocument },
    ]}
  }
}
