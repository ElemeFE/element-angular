import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ElInputNumber } from './input-number'


@NgModule({
  declarations: [ElInputNumber],
  exports: [ElInputNumber],
  imports: [CommonModule, FormsModule],
  entryComponents: [ElInputNumber],
})
export class ElInputNumberModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElInputNumberModule, providers: [] }
  }
}
