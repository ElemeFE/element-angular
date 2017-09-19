import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElSharedModule } from '../shared/module'
import { ElButtonsModule } from '../button/module'
import { ElDropdownItem } from './dropdown.item'
import { ElDropdown } from './dropdown'

@NgModule({
  declarations: [ElDropdown, ElDropdownItem],
  exports: [ElDropdown, ElDropdownItem],
  imports: [CommonModule, ElButtonsModule, ElSharedModule],
  entryComponents: [ElDropdown],
})
export class ElDropdownModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElDropdownModule, providers: [] }
  }
}
