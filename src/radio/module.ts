import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ElRadioGroup } from './radio-group'
import { ElRadioButton } from './radio-button'
import { ElRadio } from './radio'


@NgModule({
  declarations: [ElRadio, ElRadioGroup, ElRadioButton],
  exports: [ElRadio, ElRadioGroup, ElRadioButton],
  imports: [CommonModule, FormsModule],
  entryComponents: [ElRadio, ElRadioGroup, ElRadioButton],
})
export class ElRadiosModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElRadiosModule, providers: [] }
  }
}
