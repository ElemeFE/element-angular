import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElButtonsModule } from '../button/module'
import { ElDropdown } from './dropdown'
import { ElDropdownItem } from './dropdown.item'


@NgModule({
  declarations: [ElDropdown, ElDropdownItem],
  exports: [ElDropdown, ElDropdownItem],
  imports: [CommonModule, ElButtonsModule],
  entryComponents: [ElDropdown],
})
export class ElDropdownModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElDropdownModule, providers: [] }
  }
}
