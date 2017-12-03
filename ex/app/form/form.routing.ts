import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExFormMainComponent } from './main/main.component'
import { ExCheckboxComponent } from './checkbox/checkbox.component'
import { ExRadioComponent } from './radio/radio.component'
import { ExInputComponent } from './input/input.component'
import { ExInputNumberComponent } from './input-number/input-number.component'
import { ExSelectComponent } from './select/select.component'
import { ExSwitchComponent } from './switch/switch.component'
import { ExRateComponent } from './rate/rate.component'
import { ExCascaderComponent } from './cascader/cascader.component'
import { ExDatePickerComponent } from './date-picker/date-picker.component'
import { ExSliderComponent } from './slider/slider.component'
import { ExUploadComponent } from './upload/upload.component'
import { ExFormComponent } from './form/form.component'


export const formRoutes: Routes = [{
  path: '', component: ExFormMainComponent,
  children: [{
    path: 'radio', component: ExRadioComponent,
  }, {
    path: 'checkbox', component: ExCheckboxComponent,
  }, {
    path: 'input', component: ExInputComponent,
  }, {
    path: 'input-number', component: ExInputNumberComponent,
  }, {
    path: 'select', component: ExSelectComponent,
  }, {
    path: 'switch', component: ExSwitchComponent,
  }, {
    path: 'rate', component: ExRateComponent,
  }, {
    path: 'cascader', component: ExCascaderComponent,
  }, {
    path: 'date-picker', component: ExDatePickerComponent,
  }, {
    path: 'slider', component: ExSliderComponent,
  }, {
    path: 'upload', component: ExUploadComponent,
  }, {
    path: 'form', component: ExFormComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(formRoutes)],
  exports: [RouterModule],
})
export class FormRoutingModule {
}
