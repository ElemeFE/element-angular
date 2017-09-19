import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElSharedModule } from '../shared/module'
import { ElDialog } from './dialog'

export function getDocument(): any { return document }
export function getWindow(): any { return window }
@NgModule({
  declarations: [ElDialog],
  exports: [ElDialog],
  imports: [CommonModule, ElSharedModule],
  entryComponents: [ElDialog],
})
export class ElDialogModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElDialogModule, providers: [] }
  }
}
