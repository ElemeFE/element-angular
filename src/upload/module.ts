import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElUpload } from './upload'


@NgModule({
  declarations: [ElUpload],
  exports: [ElUpload],
  imports: [CommonModule],
  entryComponents: [ElUpload],
})
export class ElUploadModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElUploadModule, providers: [] }
  }
}
