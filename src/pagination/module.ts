import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElPaginationButton, ElPaginationPager } from './children'
import { ElPagination } from './pagination'


@NgModule({
  declarations: [ElPagination, ElPaginationButton, ElPaginationPager],
  exports: [ElPagination],
  imports: [CommonModule],
  entryComponents: [ElPagination],
})
export class ElPaginationModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElPaginationModule, providers: [] }
  }
}
