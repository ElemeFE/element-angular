import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainComponent } from './main/main.component'

import { TooltipComponent } from './tooltip/tooltip.component'


export const othersRoutes: Routes = [{
  path: '', component: MainComponent,
  children: [{
    path: 'tooltip', component: TooltipComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(othersRoutes)],
  exports: [RouterModule],
})
export class OthersRoutingModule {
}