import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElButton } from './button'
import { ElButtonGroup } from './button-group'
import { ElButtonConfig } from './button-config'


@NgModule({
  declarations: [ElButton, ElButtonGroup],
  exports: [ElButton, ElButtonGroup],
  imports: [CommonModule],
  entryComponents: [ElButton, ElButtonGroup],
})
export class ElButtonsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElButtonsModule, providers: [ElButtonConfig] }
  }
}
