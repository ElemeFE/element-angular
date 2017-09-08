import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElCollapse } from './collapse'
import { ElCollapseItem } from './collapse-item'


@NgModule({
  declarations: [ElCollapse, ElCollapseItem],
  exports: [ElCollapse, ElCollapseItem],
  imports: [CommonModule],
  entryComponents: [ElCollapse],
})
export class ElCollapseModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElCollapseModule, providers: [] }
  }
}
