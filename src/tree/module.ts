import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTree } from './tree'

@NgModule({
  declarations: [ElTree],
  exports: [ElTree],
  imports: [CommonModule],
  entryComponents: [ElTree],
})
export class ElTreeModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElTreeModule, providers: []}
  }
}
