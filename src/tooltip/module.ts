import { NgModule, ModuleWithProviders, Injectable } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTooltip, WindowWrapper } from './tooltip'

export function getWindow(): any { return window }

@NgModule({
  declarations: [ElTooltip],
  exports: [ElTooltip],
  imports: [CommonModule],
  entryComponents: [ElTooltip],
})
export class ElTooltipModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElTooltipModule, providers: [{
      provide: WindowWrapper, useFactory: getWindow,
    }]}
  }
}
