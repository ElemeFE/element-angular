import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExUserMainComponent } from './main/main.component'

import { ExTagComponent } from './tag/tag.component'
import { ExProgressComponent } from './progress/progress.component'
import { ExBadgeComponent } from './badge/badge.component'
import { ExPaginationComponent } from './pagination/pagination.component'
import { ExTableComponent } from './table/table.component'


export const dataRoutes: Routes = [{
  path: '', component: ExUserMainComponent,
  children: [{
    path: 'tag', component: ExTagComponent,
  }, {
    path: 'progress', component: ExProgressComponent,
  }, {
    path: 'badge', component: ExBadgeComponent,
  }, {
    path: 'pagination', component: ExPaginationComponent,
  }, {
    path: 'table', component: ExTableComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(dataRoutes)],
  exports: [RouterModule],
})
export class DataRoutingModule {
}
