import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NoticeRoutingModule } from './notice.routing'
import { ElModule } from '../../../src/index'
import { ExSharedModule } from '../shared/module'

import { ExNoticeMainComponent } from './main/main.component'
import { ExLoadingComponent } from './loading/loading.component'
import { ExMessageComponent } from './message/message.component'

@NgModule({
  declarations: [
    ExNoticeMainComponent,
    ExLoadingComponent,
    ExMessageComponent,
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
