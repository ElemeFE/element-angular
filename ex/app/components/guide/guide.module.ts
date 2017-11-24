import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { GuideRoutingModule } from './guide.routing'
import { ElModule } from '../../../../src/element-angular.module'
import { ExSharedModule } from '../../shared/module'
import { ExGuideMainComponent } from './main/main.component'
import { ExInstallComponent } from './install/install.component'
import { ExStartComponent } from './start/start.component'
import { ExLanguageComponent } from './language/language.component'
import { ExThemeComponent } from './theme/theme.component'
import { ExLogComponent } from './log/log.component'
import { ExDirectivesComponent } from './directives/directives.component'

@NgModule({
  declarations: [
    ExGuideMainComponent,
    ExInstallComponent,
    ExStartComponent,
    ExLanguageComponent,
    ExThemeComponent,
    ExLogComponent,
    ExDirectivesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GuideRoutingModule,
    ElModule,
    ExSharedModule,
  ],
  exports: [ExGuideMainComponent],
  providers: [],
})
export class GuideModule {
}
