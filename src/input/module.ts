import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElInput } from './input'
import { FormsModule } from '@angular/forms'
import { ElFormItem } from '../form/form-item'


@NgModule({
  declarations: [ElInput],
  exports: [ElInput],
  imports: [CommonModule, FormsModule],
  entryComponents: [ElInput],
})
export class ElInputsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElInputsModule, providers: [ ElFormItem ] }
  }
}
