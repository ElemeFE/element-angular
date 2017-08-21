import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExGuideMainComponent } from './main/main.component'
import { ExInstallComponent } from './install/install.component'


export const guideRoutes: Routes = [{
  path: '', component: ExGuideMainComponent,
  children: [{
    path: 'install', component: ExInstallComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(guideRoutes)],
  exports: [RouterModule],
})
export class GuideRoutingModule {
}
