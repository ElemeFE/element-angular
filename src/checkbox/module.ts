import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ElCheckbox } from './checkbox'
import { ElCheckboxButton } from './checkbox-button'
import { ElCheckboxGroup } from './checkbox-group'

@NgModule({
  declarations: [ElCheckbox, ElCheckboxButton, ElCheckboxGroup],
  exports: [ElCheckbox, ElCheckboxButton, ElCheckboxGroup],
  imports: [CommonModule, FormsModule],
  entryComponents: [ElCheckbox, ElCheckboxButton, ElCheckboxGroup],
})
export class ElCheckboxsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElCheckboxsModule, providers: [] }
  }
}
