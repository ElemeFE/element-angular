import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElDialog } from './dialog'


@NgModule({
  declarations: [ElDialog],
  exports: [ElDialog],
  imports: [CommonModule],
  entryComponents: [ElDialog],
})
export class ElDialogModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElDialogModule, providers: [] }
  }
}
