import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NavRoutingModule } from './navigation.routing'
import { ElModule } from '../../../src/index'

import { MainComponent } from './main/main.component'
import { MenuComponent } from './menu/menu.component'

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavRoutingModule,
    ElModule,
  ],
  exports: [MainComponent],
  providers: [],
})
export class NavigationModule {
}