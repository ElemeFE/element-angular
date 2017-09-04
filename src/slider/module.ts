import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTooltipModule } from '../tooltip/module'
import { ElSliderButton } from './slider-button'
import { ElSlider } from './slider'


@NgModule({
  declarations: [ElSlider, ElSliderButton],
  exports: [ElSlider, ElSliderButton],
  imports: [CommonModule, ElTooltipModule],
  entryComponents: [ElSlider],
})
export class ElSliderModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElSliderModule, providers: [] }
  }
}
