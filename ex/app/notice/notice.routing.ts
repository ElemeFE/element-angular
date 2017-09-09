import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExNoticeMainComponent } from './main/main.component'
import { ExLoadingComponent } from './loading/loading.component'
import { ExMessageComponent } from './message/message.component'
import { ExNotificationComponent } from './notification/notification.component'
import { ExAlertComponent } from './alert/alert.component'


export const noticeRoutes: Routes = [{
  path: '', component: ExNoticeMainComponent,
  children: [{
    path: 'loading', component: ExLoadingComponent,
  }, {
    path: 'message', component: ExMessageComponent,
  }, {
    path: 'notification', component: ExNotificationComponent,
  }, {
    path: 'alert', component: ExAlertComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(noticeRoutes)],
  exports: [RouterModule],
})
export class NoticeRoutingModule {
}
