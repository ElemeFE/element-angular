import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NavRoutingModule } from './navigation.routing'
import { ElModule } from '../../../src/index'

import { ExNavigationMainComponent } from './main/main.component'
import { ExMenuComponent } from './menu/menu.component'

@NgModule({
  declarations: [
    ExNavigationMainComponent,
    ExMenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavRoutingModule,
    ElModule,
  ],
  exports: [ExNavigationMainComponent],
  providers: [],
})
export class NavigationModule {
}
