import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElBreadcrumb } from './breadcrumb'
import { ElBreadcrumbItem } from './breadcrumb-item'


@NgModule({
  declarations: [ElBreadcrumb, ElBreadcrumbItem],
  exports: [ElBreadcrumb, ElBreadcrumbItem],
  imports: [CommonModule],
  entryComponents: [ElBreadcrumb],
})
export class ElBreadcrumbsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElBreadcrumbsModule, providers: [] }
  }
}
