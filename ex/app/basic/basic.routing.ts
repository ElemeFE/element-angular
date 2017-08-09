import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main/main.component'

import { ButtonComponent } from './button/button.component'
import { IconComponent } from './icon/icon.component'


export const basicRoutes: Routes = [{
  path: '', component: MainComponent,
  children: [{
    path: 'button', component: ButtonComponent,
  },{
    path: 'icon', component: IconComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(basicRoutes)],
  exports: [RouterModule],
})
export class BasicRoutingModule {
}