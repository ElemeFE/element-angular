import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElRadio } from './radio'
import { ElRadioGroup } from './radio-group'
import { ElRadioConfig } from './radio-config'


@NgModule({
  declarations: [ElRadio, ElRadioGroup],
  exports: [ElRadio, ElRadioGroup],
  imports: [CommonModule],
  entryComponents: [ElRadio, ElRadioGroup],
})
export class ElRadiosModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElRadiosModule, providers: [ElRadioConfig] }
  }
}
