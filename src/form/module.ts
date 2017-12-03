import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElSharedModule } from '../shared/module'
import { ElButtonsModule } from '../button/module'
import { ElForm } from './form'
import { ElFormItem } from './form-item'

@NgModule({
  declarations: [ElForm, ElFormItem],
  exports: [ElForm, ElFormItem],
  imports: [CommonModule, ElButtonsModule, ElSharedModule],
  entryComponents: [ElForm],
})
export class ElFormModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElFormModule, providers: [] }
  }
}
