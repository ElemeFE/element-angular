import { NgModule, ModuleWithProviders } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { ElSelectModule } from '../select/module'
import { ElPaginationButton, ElPaginationPager, ElPaginationSize, ElPaginationJump } from './children'
import { ElPagination } from './pagination'


@NgModule({
  declarations: [
    ElPagination,
    ElPaginationButton,
    ElPaginationPager,
    ElPaginationSize,
    ElPaginationJump,
  ],
  exports: [ElPagination],
  imports: [CommonModule, FormsModule, ElSelectModule],
  entryComponents: [ElPagination],
})
export class ElPaginationModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElPaginationModule, providers: [] }
  }
}
