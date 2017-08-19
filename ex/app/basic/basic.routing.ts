import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main/main.component'

import { ButtonComponent } from './button/button.component'
import { IconComponent } from './icon/icon.component'
import { LayoutComponent } from './layout/layout.component'


export const basicRoutes: Routes = [{
  path: '', component: MainComponent,
  children: [{
    path: 'button', component: ButtonComponent,
  },{
    path: 'icon', component: IconComponent,
  },{
    path: 'layout', component: LayoutComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(basicRoutes)],
  exports: [RouterModule],
})
export class BasicRoutingModule {
}
