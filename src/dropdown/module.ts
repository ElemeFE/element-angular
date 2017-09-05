import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElButtonsModule } from '../button/module'
import { ElDropdown } from './dropdown'
import { ElDropdownItem } from './dropdown.item'
import { DocumentWrapper } from '../shared/services'
export function getDocument(): any { return document }

@NgModule({
  declarations: [ElDropdown, ElDropdownItem],
  exports: [ElDropdown, ElDropdownItem],
  imports: [CommonModule, ElButtonsModule],
  entryComponents: [ElDropdown],
})
export class ElDropdownModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElDropdownModule, providers: [
      { provide: DocumentWrapper, useFactory: getDocument },
    ] }
  }
}
