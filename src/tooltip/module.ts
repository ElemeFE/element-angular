import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ElTooltip } from './tooltip'
import { ElTooltipDirective } from './tooltip.directive'
import { ElTooltipHostDirective } from './tooltip-host.directive'

@NgModule({
  declarations: [ElTooltip, ElTooltipDirective, ElTooltipHostDirective],
  exports: [ElTooltip, ElTooltipDirective, ElTooltipHostDirective],
  imports: [CommonModule],
  entryComponents: [ElTooltip],
})
export class ElTooltipModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElTooltipModule, providers: [] }
  }
}
