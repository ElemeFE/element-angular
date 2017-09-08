import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExUserMainComponent } from './main/main.component'

import { ExTooltipComponent } from './tooltip/tooltip.component'
import { ExCardComponent } from './card/card.component'
import { ExDialogComponent } from './dialog/dialog.component'
import { ExCarouselComponent } from './carousel/carousel.component'
import { ExCollapseComponent } from './collapse/collapse.component'


export const othersRoutes: Routes = [{
  path: '', component: ExUserMainComponent,
  children: [{
    path: 'tooltip', component: ExTooltipComponent,
  }, {
    path: 'card', component: ExCardComponent,
  }, {
    path: 'dialog', component: ExDialogComponent,
  }, {
    path: 'carousel', component: ExCarouselComponent,
  }, {
    path: 'collapse', component: ExCollapseComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(othersRoutes)],
  exports: [RouterModule],
})
export class OthersRoutingModule {
}
