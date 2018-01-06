import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTree } from './tree'
import { ElTreeItem } from './tree-item'

@NgModule({
  declarations: [ElTree, ElTreeItem],
  exports: [ElTree, ElTreeItem],
  imports: [CommonModule],
  entryComponents: [ElTree],
})
export class ElTreeModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElTreeModule, providers: []}
  }
}
