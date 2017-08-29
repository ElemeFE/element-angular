import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Elprogress } from './progress'


@NgModule({
  declarations: [Elprogress],
  exports: [Elprogress],
  imports: [CommonModule],
  entryComponents: [Elprogress],
})
export class ElProgressModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElProgressModule, providers: [] }
  }
}
