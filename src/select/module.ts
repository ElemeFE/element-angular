import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElInputsModule } from '../input/module'
import { ElSelect } from './select'


@NgModule({
  declarations: [ElSelect],
  exports: [ElSelect],
  imports: [CommonModule, ElInputsModule],
  entryComponents: [ElSelect],
})
export class ElSelectModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElSelectModule, providers: [] }
  }
}
