import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElSwitch } from './switch'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [ElSwitch],
  exports: [ElSwitch],
  imports: [CommonModule, FormsModule],
  entryComponents: [ElSwitch],
})
export class ElSwitchModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElSwitchModule, providers: [] }
  }
}
