import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElInputsModule } from '../input/module'
import { ElInputNumber } from './input-number'


@NgModule({
  declarations: [ElInputNumber],
  exports: [ElInputNumber],
  imports: [CommonModule, ElInputsModule],
  entryComponents: [ElInputNumber],
})
export class ElInputNumberModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElInputNumberModule, providers: [] }
  }
}
