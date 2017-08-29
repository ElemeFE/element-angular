import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExNavigationMainComponent } from './main/main.component'

import { ExMenuComponent } from './menu/menu.component'
import { ExStepsComponent } from './steps/steps.component'


export const navigationRoutes: Routes = [{
  path: '', component: ExNavigationMainComponent,
  children: [{
    path: 'menu', component: ExMenuComponent,
  }, {
    path: 'steps', component: ExStepsComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(navigationRoutes)],
  exports: [RouterModule],
})
export class NavRoutingModule {
}
