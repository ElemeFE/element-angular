import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main/main.component'

import { RadioComponent } from './radio/radio.component'


export const formRoutes: Routes = [{
  path: '', component: MainComponent,
  children: [{
    path: 'radio', component: RadioComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(formRoutes)],
  exports: [RouterModule],
})
export class FormRoutingModule {
}