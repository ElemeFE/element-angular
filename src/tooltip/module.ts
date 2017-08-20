import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ElTooltip } from './tooltip'

@NgModule({
  declarations: [ElTooltip],
  exports: [ElTooltip],
  imports: [CommonModule],
  entryComponents: [ElTooltip],
})
export class ElTooltipModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElTooltipModule, providers: [] }
  }
}
