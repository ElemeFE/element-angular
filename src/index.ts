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
import { ElSelectModule } from './select/module'
import { ElSwitchModule } from './switch/module'
import { ElRateModule } from './rate/module'
import { ElProgressModule } from './progress/module'
import { ElStepsModule } from './steps/module'
import { ElLoadingModule } from './loading/module'

const ElMODULES = {
  ElButtonsModule, ElIconsModule, ElRadiosModule, ElMenusModule, ElTooltipModule, ElRowModule,
  ElColModule, ElCheckboxsModule, ElInputsModule, ElInputNumberModule, ElTagsModule, ElSelectModule,
  ElSwitchModule, ElRateModule, ElProgressModule, ElStepsModule, ElLoadingModule,
}
const ELMODULES_ARRAY = Object.keys(ElMODULES).map(name => ElMODULES[name])

@NgModule({
  imports: [
    [...ELMODULES_ARRAY.map(module => module.forRoot())],
    BrowserAnimationsModule,
  ],
  exports: ELMODULES_ARRAY,
})
export class ElRootModule {
}

@NgModule({
  imports: ELMODULES_ARRAY,
  exports: ELMODULES_ARRAY,
})
export class ElModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ElRootModule,
      providers: [],
    }
  }
}

export const ElChildModules = ElMODULES
