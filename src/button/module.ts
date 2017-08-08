import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElButton } from './button'


@NgModule({
  declarations: [ElButton],
  exports: [ElButton],
  imports: [CommonModule],
  entryComponents: [ElButton],
})
export class ElButtonsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElButtonsModule, providers: [] }
  }
}
