import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTag } from './tag'


@NgModule({
  declarations: [ElTag],
  exports: [ElTag],
  imports: [CommonModule],
  entryComponents: [ElTag],
})
export class ElTagsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElTagsModule, providers: [] }
  }
}
