import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExUserMainComponent } from './main/main.component'

import { ExTooltipComponent } from './tooltip/tooltip.component'
import { ExCardComponent } from './card/card.component'


export const othersRoutes: Routes = [{
  path: '', component: ExUserMainComponent,
  children: [{
    path: 'tooltip', component: ExTooltipComponent,
  }, {
    path: 'card', component: ExCardComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(othersRoutes)],
  exports: [RouterModule],
})
export class OthersRoutingModule {
}
