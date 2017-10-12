import { NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ElMessageService } from './message/message.service'
import { ElNotificationService } from './notification/notification.service'

import { ElSharedModule } from './shared/module'
import { ElButtonsModule } from './button/module'
import { ElCheckboxsModule } from './checkbox/module'
import { ElIconsModule } from './icon/module'
import { ElRadiosModule } from './radio/module'
import { ElMenusModule } from './menu/module'
import { ElTooltipModule } from './tooltip/module'
import { ElRowModule } from './row/module'
import { ElColModule } from './col/module'
import { ElInputsModule } from './input/module'
import { ElInputNumberModule } from './input-number/module'
import { ElTagsModule } from './tag/module'
import { ElSelectModule } from './select/module'
import { ElSwitchModule } from './switch/module'
import { ElRateModule } from './rate/module'
import { ElProgressModule } from './progress/module'
import { ElStepsModule } from './steps/module'
import { ElLoadingModule } from './loading/module'
import { ElMessagesModule } from './message/module'
import { ElNotificationModule } from './notification/module'
import { ElCascaderModule } from './cascader/module'
import { ElBadgesModule } from './badge/module'
import { ElCardsModule } from './card/module'
import { ElDropdownModule } from './dropdown/module'
import { ElBreadcrumbsModule } from './breadcrumb/module'
import { ElDateModule } from './date-picker/module'
import { ElSliderModule } from './slider/module'
import { ElDialogModule } from './dialog/module'
import { ElCarouselModule } from './carousel/module'
import { ElCollapseModule } from './collapse/module'
import { ElAlertModule } from './alert/module'
import { ElPaginationModule } from './pagination/module'
import { ElUploadModule } from './upload/module'
import { ElTableModule } from './table/module'
import { ElContainerModule } from './container/module'

export const ElChildModules: any = {
  ElButtonsModule, ElIconsModule, ElRadiosModule, ElMenusModule, ElTooltipModule, ElRowModule,
  ElColModule, ElCheckboxsModule, ElInputsModule, ElInputNumberModule, ElTagsModule, ElSelectModule,
  ElSwitchModule, ElRateModule, ElProgressModule, ElStepsModule, ElLoadingModule, ElMessagesModule,
  ElSharedModule, ElNotificationModule, ElCascaderModule, ElBadgesModule, ElCardsModule, ElDropdownModule,
  ElBreadcrumbsModule, ElDateModule, ElSliderModule, ElDialogModule, ElCarouselModule, ElCollapseModule,
  ElAlertModule, ElPaginationModule, ElUploadModule, ElTableModule, ElContainerModule,
}
export const ELMODULES_GROUP: any[] = [
  ElButtonsModule, ElIconsModule, ElRadiosModule, ElMenusModule, ElTooltipModule, ElRowModule,
  ElColModule, ElCheckboxsModule, ElInputsModule, ElInputNumberModule, ElTagsModule, ElSelectModule,
  ElSwitchModule, ElRateModule, ElProgressModule, ElStepsModule, ElLoadingModule, ElMessagesModule,
  ElSharedModule, ElNotificationModule, ElCascaderModule, ElBadgesModule, ElCardsModule, ElDropdownModule,
  ElBreadcrumbsModule, ElDateModule, ElSliderModule, ElDialogModule, ElCarouselModule, ElCollapseModule,
  ElAlertModule, ElPaginationModule, ElUploadModule, ElTableModule, ElContainerModule,
]

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ElButtonsModule.forRoot(), ElIconsModule.forRoot(), ElRadiosModule.forRoot(), ElMenusModule.forRoot(),
    ElTooltipModule.forRoot(), ElRowModule.forRoot(), ElColModule.forRoot(), ElCheckboxsModule.forRoot(),
    ElInputsModule.forRoot(), ElInputNumberModule.forRoot(), ElTagsModule.forRoot(), ElSelectModule.forRoot(),
    ElSwitchModule.forRoot(), ElRateModule.forRoot(), ElProgressModule.forRoot(), ElStepsModule.forRoot(),
    ElLoadingModule.forRoot(), ElMessagesModule.forRoot(), ElSharedModule.forRoot(), ElNotificationModule.forRoot(),
    ElCascaderModule.forRoot(), ElBadgesModule.forRoot(), ElCardsModule.forRoot(), ElDropdownModule.forRoot(),
    ElBreadcrumbsModule.forRoot(), ElDateModule.forRoot(), ElSliderModule.forRoot(), ElDialogModule.forRoot(),
    ElCarouselModule.forRoot(), ElCollapseModule.forRoot(), ElAlertModule.forRoot(), ElPaginationModule.forRoot(),
    ElUploadModule.forRoot(), ElTableModule.forRoot(), ElContainerModule.forRoot(),
  ],
  exports: ELMODULES_GROUP,
})
export class ElRootModule {
}

@NgModule({
  imports: ELMODULES_GROUP,
  exports: ELMODULES_GROUP,
})
class ElModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ElRootModule,
      providers: [],
    }
  }
}

export {
  ElModule,
  ElMessageService,
  ElNotificationService,
}
