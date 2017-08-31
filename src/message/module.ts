import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElMessageContainer } from './message'
import { ElMessageService, WindowWrapper, DocumentWrapper } from './message.service'
export function getDocument(): any { return document }
export function getWindow(): any { return window }

@NgModule({
  declarations: [ElMessageContainer],
  exports: [ElMessageContainer],
  imports: [CommonModule],
  entryComponents: [ElMessageContainer],
  providers: [],
})
export class ElMessagesModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElMessagesModule, providers: [{
      provide: DocumentWrapper, useFactory: getDocument,
    }, {
      provide: WindowWrapper, useFactory: getWindow,
    },
      ElMessageService]}
  }
}
