import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExBasicMainComponent } from './main/main.component'

import { ExButtonComponent } from './button/button.component'
import { ExIconComponent } from './icon/icon.component'
import { ExLayoutComponent } from './layout/layout.component'


export const basicRoutes: Routes = [{
  path: '', component: ExBasicMainComponent,
  children: [{
    path: 'button', component: ExButtonComponent,
  }, {
    path: 'icon', component: ExIconComponent,
  }, {
    path: 'layout', component: ExLayoutComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(basicRoutes)],
  exports: [RouterModule],
})
export class BasicRoutingModule {
}
