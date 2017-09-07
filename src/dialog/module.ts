import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElDialog, DocumentWrapper, WindowWrapper } from './dialog'

export function getDocument(): any { return document }
export function getWindow(): any { return window }
@NgModule({
  declarations: [ElDialog],
  exports: [ElDialog],
  imports: [CommonModule],
  entryComponents: [ElDialog],
})
export class ElDialogModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElDialogModule, providers: [{
      provide: DocumentWrapper, useFactory: getDocument,
    }, {
      provide: WindowWrapper, useFactory: getWindow,
    }]}
  }
}
