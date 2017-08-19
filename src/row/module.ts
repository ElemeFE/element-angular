import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElRowDirective } from './row.directive'


@NgModule({
  declarations: [ElRowDirective],
  exports: [ElRowDirective],
  imports: [CommonModule],
  entryComponents: [],
})
export class ElRowModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElRowModule, providers: [] }
  }
}
