import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElInput } from './input'


@NgModule({
  declarations: [ElInput],
  exports: [ElInput],
  imports: [CommonModule],
  entryComponents: [ElInput],
})
export class ElInputsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElInputsModule, providers: [] }
  }
}
