import { NgModule, ModuleWithProviders } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
import { ElButtonsModule } from '../button/module'
import { ElUploadRequest } from './upload.request'
import { ElUpload } from './upload'


@NgModule({
  declarations: [ElUpload],
  exports: [ElUpload],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ElButtonsModule,
  ],
  entryComponents: [ElUpload],
})
export class ElUploadModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElUploadModule, providers: [ElUploadRequest] }
  }
}
