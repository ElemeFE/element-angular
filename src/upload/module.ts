import { NgModule, ModuleWithProviders } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
import { ElProgressModule } from '../progress/module'
import { ElButtonsModule } from '../button/module'
import { ElUploadRequest } from './upload.request'
import { ElUpload } from './upload'
import { ElUploadList } from './upload.list'
import { ElUploadDragger } from './upload.dragger'


@NgModule({
  declarations: [ElUpload, ElUploadList, ElUploadDragger],
  exports: [ElUpload],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ElButtonsModule,
    ElProgressModule,
  ],
  entryComponents: [ElUpload],
})
export class ElUploadModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElUploadModule, providers: [ElUploadRequest] }
  }
}
