import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NoticeRoutingModule } from './notice.routing'
import { ElModule } from '../../../src/index'
import { ExSharedModule } from '../shared/module'

import { ExNoticeMainComponent } from './main/main.component'
import { ExLoadingComponent } from './loading/loading.component'

@NgModule({
  declarations: [
    ExNoticeMainComponent,
    ExLoadingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NoticeRoutingModule,
    ElModule,
    ExSharedModule,
  ],
  exports: [ExNoticeMainComponent],
  providers: [],
})
export class NoticeModule {
}
