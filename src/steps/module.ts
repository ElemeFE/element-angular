import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElStep } from './step'
import { ElSteps } from './steps'


@NgModule({
  declarations: [ElStep, ElSteps],
  exports: [ElStep, ElSteps],
  imports: [CommonModule],
  entryComponents: [ElStep, ElSteps],
})
export class ElStepsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElStepsModule, providers: [] }
  }
}
