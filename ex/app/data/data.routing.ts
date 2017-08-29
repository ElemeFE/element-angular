import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExUserMainComponent } from './main/main.component'

import { ExTagComponent } from './tag/tag.component'
import { ExProgressComponent } from './progress/progress.component'


export const dataRoutes: Routes = [{
  path: '', component: ExUserMainComponent,
  children: [{
    path: 'tag', component: ExTagComponent,
  }, {
    path: 'progress', component: ExProgressComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(dataRoutes)],
  exports: [RouterModule],
})
export class DataRoutingModule {
}
