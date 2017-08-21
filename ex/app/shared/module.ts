import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ExFooterNavComponent } from './components'


@NgModule({
  declarations: [ExFooterNavComponent],
  exports: [ExFooterNavComponent],
  imports: [CommonModule, FormsModule],
  entryComponents: [ExFooterNavComponent],
})
export class ExSharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ExSharedModule, providers: [] }
  }
}
