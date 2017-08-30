import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElLoadingDirective, DocumentWrapper, WindowWrapper } from './loading.directive'
export function getDocument(): any { return document }
export function getWindow(): any { return window }

@NgModule({
  declarations: [ElLoadingDirective],
  exports: [ElLoadingDirective],
  imports: [CommonModule],
  entryComponents: [],
})
export class ElLoadingModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElLoadingModule, providers: [{
      provide: DocumentWrapper, useFactory: getDocument,
    }, {
      provide: WindowWrapper, useFactory: getWindow,
    }] }
  }
}
