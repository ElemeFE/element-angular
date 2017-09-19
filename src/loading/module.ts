import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElSharedModule } from '../shared/module'
import { ElLoadingDirective } from './loading.directive'

@NgModule({
  declarations: [ElLoadingDirective],
  exports: [ElLoadingDirective],
  imports: [CommonModule, ElSharedModule],
  entryComponents: [],
})
export class ElLoadingModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElLoadingModule, providers: []}
  }
}
