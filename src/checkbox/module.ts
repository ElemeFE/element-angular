import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElCheckbox } from './checkbox'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [ElCheckbox],
  exports: [ElCheckbox],
  imports: [CommonModule, FormsModule],
  entryComponents: [ElCheckbox],
})
export class ElCheckboxsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElCheckboxsModule, providers: [] }
  }
}
