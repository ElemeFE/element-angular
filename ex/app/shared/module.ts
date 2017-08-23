import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ExFooterNavComponent, ExDemoComponent, ExDocumentComponent } from './components'
import { HighLightPipe } from './pipe'
import { ElDynamicDirective } from './directives'

@NgModule({
  declarations: [
    ElDynamicDirective,
    ExFooterNavComponent,
    ExDemoComponent,
    ExDocumentComponent,
    HighLightPipe,
  ],
  exports: [
    ElDynamicDirective,
    ExFooterNavComponent,
    ExDocumentComponent,
    HighLightPipe,
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
