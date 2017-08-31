import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElMessageContainer } from './message'


@NgModule({
  declarations: [ElMessageContainer],
  exports: [ElMessageContainer],
  imports: [CommonModule],
  entryComponents: [ElMessageContainer],
})
export class ElMessagesModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElMessagesModule, providers: [] }
  }
}
