import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTree } from './tree'
import { ElTreeItem } from './tree-item'
import { ElCheckboxsModule } from '../checkbox/module'

@NgModule({
  declarations: [ElTree, ElTreeItem],
  exports: [ElTree, ElTreeItem],
  imports: [CommonModule, ElCheckboxsModule],
  entryComponents: [ElTree],
})
export class ElTreeModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElTreeModule, providers: []}
  }
}
