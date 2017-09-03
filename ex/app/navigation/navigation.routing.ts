import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExNavigationMainComponent } from './main/main.component'

import { ExMenuComponent } from './menu/menu.component'
import { ExStepsComponent } from './steps/steps.component'
import { ExDropdownComponent } from './dropdown/dropdown.component'


export const navigationRoutes: Routes = [{
  path: '', component: ExNavigationMainComponent,
  children: [{
    path: 'menu', component: ExMenuComponent,
  }, {
    path: 'steps', component: ExStepsComponent,
  }, {
    path: 'dropdown', component: ExDropdownComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(navigationRoutes)],
  exports: [RouterModule],
})
export class NavRoutingModule {
}
