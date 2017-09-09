import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElAlert } from './alert'


@NgModule({
  declarations: [ElAlert],
  exports: [ElAlert],
  imports: [CommonModule],
  entryComponents: [ElAlert],
})
export class ElAlertModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElAlertModule, providers: [] }
  }
}
