import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NoticeRoutingModule } from './notice.routing'
import { ElModule } from '../../../src/element-angular.module'
import { ExSharedModule } from '../shared/module'

import { ExNoticeMainComponent } from './main/main.component'
import { ExLoadingComponent } from './loading/loading.component'
import { ExMessageComponent, ExMessageDemoComponent } from './message/message.component'
import { ExNotificationComponent, ExNotificationDemoComponent } from './notification/notification.component'
import { ExAlertComponent } from './alert/alert.component'

@NgModule({
  declarations: [
    ExNoticeMainComponent,
    ExLoadingComponent,
    ExMessageComponent,
    ExMessageDemoComponent,
    ExNotificationComponent,
    ExNotificationDemoComponent,
    ExAlertComponent,
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
