import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ExFooterNavComponent, ExDemoComponent } from './components'
import { SafeHtmlPipe } from './pipe'


@NgModule({
  declarations: [
    ExFooterNavComponent,
    ExDemoComponent,
    SafeHtmlPipe,
  ],
  exports: [
    ExFooterNavComponent,
    SafeHtmlPipe,
    ExDemoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  entryComponents: [ExFooterNavComponent],
})
export class ExSharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ExSharedModule, providers: [] }
  }
}
