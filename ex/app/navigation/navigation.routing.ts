import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main/main.component'

import { MenuComponent } from './menu/menu.component'


export const navigationRoutes: Routes = [{
  path: '', component: MainComponent,
  children: [{
    path: 'menu', component: MenuComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(navigationRoutes)],
  exports: [RouterModule],
})
export class NavRoutingModule {
}
