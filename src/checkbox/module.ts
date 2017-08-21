import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ElCheckbox } from './checkbox'
import { ElCheckboxGroup } from './checkbox-group'

@NgModule({
  declarations: [ElCheckbox, ElCheckboxGroup],
  exports: [ElCheckbox, ElCheckboxGroup],
  imports: [CommonModule, FormsModule],
  entryComponents: [ElCheckbox, ElCheckboxGroup],
})
export class ElCheckboxsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElCheckboxsModule, providers: [] }
  }
}
