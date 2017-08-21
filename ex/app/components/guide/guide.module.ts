import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { GuideRoutingModule } from './guide.routing'
import { ElModule } from '../../../../src/index'
import { ExSharedModule } from '../../shared/module'
import { ExGuideMainComponent } from './main/main.component'
import { ExInstallComponent } from './install/install.component'
import { ExStartComponent } from './start/start.component'

@NgModule({
  declarations: [
    ExGuideMainComponent,
    ExInstallComponent,
    ExStartComponent,
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
