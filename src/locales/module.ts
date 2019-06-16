import { NgModule, ModuleWithProviders } from '@angular/core'
import { ElLocalesService } from './service'

@NgModule({
  providers: [ElLocalesService]
})
export class ElLocalesModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElLocalesModule, providers: [] }
  }
}
