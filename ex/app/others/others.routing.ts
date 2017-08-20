import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExUserMainComponent } from './main/main.component'

import { ExTooltipComponent } from './tooltip/tooltip.component'


export const othersRoutes: Routes = [{
  path: '', component: ExUserMainComponent,
  children: [{
    path: 'tooltip', component: ExTooltipComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(othersRoutes)],
  exports: [RouterModule],
})
export class OthersRoutingModule {
}
