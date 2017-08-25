import { NgModule, ModuleWithProviders } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ElButtonsModule } from './button/module'
import { ElCheckboxsModule } from './checkbox/module'
import { ElIconsModule } from './icon/module'
import { ElRadiosModule } from './radio/module'
import { ElMenusModule } from './menu/module'
import { ElTooltipModule } from './tooltip/module'
import { ElRowModule } from './row/module'
import { ElColModule } from './col/module'
import { ElInputsModule } from './input/module'
import { ElInputNumberModule } from './input-number/module'
import { ElTagsModule } from './tag/module'

const ElMODULES = [
  ElButtonsModule, ElIconsModule, ElRadiosModule, ElMenusModule, ElTooltipModule, ElRowModule,
  ElColModule, ElCheckboxsModule, ElInputsModule, ElInputNumberModule, ElTagsModule,
]

@NgModule({
  imports: [
    ElButtonsModule.forRoot(), ElIconsModule.forRoot(), ElRadiosModule.forRoot(),
    ElTooltipModule.forRoot(), ElMenusModule.forRoot(), ElRowModule.forRoot(),
    ElColModule.forRoot(), ElCheckboxsModule.forRoot(), ElInputsModule.forRoot(),
    ElInputNumberModule.forRoot(), ElTagsModule.forRoot(),
    BrowserAnimationsModule,
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
