import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElColDirective } from './col.directive'


@NgModule({
  declarations: [ElColDirective],
  exports: [ElColDirective],
  imports: [CommonModule],
  entryComponents: [],
})
export class ElColModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElColModule, providers: [] }
  }
}
