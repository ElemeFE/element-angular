import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ExGuideMainComponent } from './main/main.component'
import { ExInstallComponent } from './install/install.component'
import { ExStartComponent } from './start/start.component'
import { ExLanguageComponent } from './language/language.component'
import { ExThemeComponent } from './theme/theme.component'
import { ExTransitionComponent } from './transition/transition.component'
import { ExLogComponent } from './log/log.component'

export const guideRoutes: Routes = [{
  path: '', component: ExGuideMainComponent,
  children: [{
    path: 'install', component: ExInstallComponent,
  }, {
    path: 'start', component: ExStartComponent,
  }, {
    path: 'i18n', component: ExLanguageComponent,
  }, {
    path: 'theme', component: ExThemeComponent,
  }, {
    path: 'transition', component: ExTransitionComponent,
  }, {
    path: 'log', component: ExLogComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(guideRoutes)],
  exports: [RouterModule],
})
export class GuideRoutingModule {
}
