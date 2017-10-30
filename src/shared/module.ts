import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElClassDirective } from './directives'
import { ExDynamicService, DocumentWrapper, WindowWrapper } from '../shared/services'
import { ElCSSValuePipe } from './pipe'
export function getDocument(): any { return document }
export function getWindow(): any { return window }

@NgModule({
  declarations: [
    ElCSSValuePipe,
    ElClassDirective,
  ],
  exports: [
    ElCSSValuePipe,
    ElClassDirective,
  ],
  imports: [CommonModule],
  entryComponents: [],
})
export class ElSharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElSharedModule, providers: [
      ExDynamicService,
      ElCSSValuePipe,
      { provide: DocumentWrapper, useFactory: getDocument },
      { provide: WindowWrapper, useFactory: getWindow },
    ]}
  }
}
