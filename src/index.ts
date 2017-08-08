import { NgModule, ModuleWithProviders } from '@angular/core'
import { ElButtonsModule } from './button/module'

const ElMODULES = [
  ElButtonsModule,
]

@NgModule({
  imports: [
    ElButtonsModule.forRoot(),
  ],
  exports: ElMODULES
})
export class ElRootModule {
}

@NgModule({
  imports: ElMODULES,
  exports: ElMODULES,
})
export class ElModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ElRootModule,
      // providers: [
      //   { provide: CONFIG, useValue: config },
      //   ElConfig,
      // ],
    }
  }
}
