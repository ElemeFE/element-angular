import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElNotificationContainer } from './notification'
import { ElNotificationService } from './notification.service'

@NgModule({
  declarations: [ElNotificationContainer],
  exports: [ElNotificationContainer],
  imports: [CommonModule],
  entryComponents: [ElNotificationContainer],
})
export class ElNotificationModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElNotificationModule, providers: [
      ElNotificationService,
    ]}
  }
}
