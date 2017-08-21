import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExGuideMainComponent } from './main/main.component'
import { ExInstallComponent } from './install/install.component'
import { ExStartComponent } from './start/start.component'

export const guideRoutes: Routes = [{
  path: '', component: ExGuideMainComponent,
  children: [{
    path: 'install', component: ExInstallComponent,
  }, {
    path: 'start', component: ExStartComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(guideRoutes)],
  exports: [RouterModule],
})
export class GuideRoutingModule {
}
