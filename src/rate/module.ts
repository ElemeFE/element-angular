import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElRate } from './rate'


@NgModule({
  declarations: [ElRate],
  exports: [ElRate],
  imports: [CommonModule],
  entryComponents: [ElRate],
})
export class ElRateModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElRateModule, providers: [] }
  }
}
