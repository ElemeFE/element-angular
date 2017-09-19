import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTableHeader, ElTableColumn, ElTableBody } from './children'
import { ElTable } from './table'
import { ElTableFormat } from './utils/format'
import { ElCSSValuePipe } from '../shared/pipe'

@NgModule({
  declarations: [
    ElTable,
    ElTableHeader,
    ElTableColumn,
    ElTableBody,
    ElCSSValuePipe,
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
    return { ngModule: ElTableModule, providers: [ElTableFormat, ElCSSValuePipe] }
  }
}
