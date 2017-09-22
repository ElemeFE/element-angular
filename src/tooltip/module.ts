import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTooltip } from './tooltip'
import { ElSharedModule } from '../shared/module'

export function getWindow(): any { return window }

@NgModule({
  declarations: [ElTooltip],
  exports: [ElTooltip],
  imports: [CommonModule, ElSharedModule],
  entryComponents: [ElTooltip],
})
export class ElTooltipModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElTooltipModule, providers: []}
  }
}
