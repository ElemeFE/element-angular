import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTable } from './table'


@NgModule({
  declarations: [ElTable],
  exports: [ElTable],
  imports: [CommonModule],
  entryComponents: [ElTable],
})
export class ElTableModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElTableModule, providers: [] }
  }
}
