import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NavRoutingModule } from './navigation.routing'
import { ElModule } from '../../../src/index'

import { ExNavigationMainComponent } from './main/main.component'
import { ExMenuComponent } from './menu/menu.component'
import { ExStepsComponent } from './steps/steps.component'
import { ExSharedModule } from '../shared/module'

@NgModule({
  declarations: [
    ExNavigationMainComponent,
    ExMenuComponent,
    ExStepsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavRoutingModule,
    ElModule,
    ExSharedModule,
  ],
  exports: [ExNavigationMainComponent],
  providers: [],
})
export class NavigationModule {
}
