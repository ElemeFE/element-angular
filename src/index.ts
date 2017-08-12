import { NgModule, ModuleWithProviders } from '@angular/core'
import { ElButtonsModule } from './button/module'
import { ElIconsModule } from './icon/module'
import { ElRadiosModule } from './radio/module'
import { ElMenusModule } from './menu/module'
import { ElTooltipModule } from './tooltip/module'

const ElMODULES = [
  ElButtonsModule, ElIconsModule, ElRadiosModule, ElMenusModule, ElTooltipModule,
]

@NgModule({
  imports: [
    ElButtonsModule.forRoot(), ElIconsModule.forRoot(), ElRadiosModule.forRoot(), ElMenusModule.forRoot(),
    ElTooltipModule.forRoot(),
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
