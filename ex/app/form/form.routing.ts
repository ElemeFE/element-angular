import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExFormMainComponent } from './main/main.component'
import { ExCheckboxComponent } from './checkbox/checkbox.component'
import { ExRadioComponent } from './radio/radio.component'
import { ExInputComponent } from './input/input.component'


export const formRoutes: Routes = [{
  path: '', component: ExFormMainComponent,
  children: [{
    path: 'radio', component: ExRadioComponent,
  }, {
    path: 'checkbox', component: ExCheckboxComponent,
  }, {
    path: 'input', component: ExInputComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(formRoutes)],
  exports: [RouterModule],
})
export class FormRoutingModule {
}
