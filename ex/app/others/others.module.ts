import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { OthersRoutingModule } from './others.routing'
import { ElModule } from '../../../src/index'

import { MainComponent } from './main/main.component'
import { TooltipComponent } from './tooltip/tooltip.component'

@NgModule({
  declarations: [
    MainComponent,
    TooltipComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OthersRoutingModule,
    ElModule,
  ],
  exports: [MainComponent],
  providers: [],
})
export class OthersModule {
}
