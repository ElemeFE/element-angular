import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTableHeader, ElTableColumn } from './children'
import { ElTable } from './table'


@NgModule({
  declarations: [
    ElTable,
    ElTableHeader,
    ElTableColumn,
  ],
  exports: [
    ElTable,
    ElTableColumn,
  ],
  imports: [CommonModule],
  entryComponents: [ElTable],
})
export class ElTableModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElTableModule, providers: [] }
  }
}
