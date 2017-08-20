import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { OthersRoutingModule } from './others.routing'
import { ElModule } from '../../../src/index'

import { ExUserMainComponent } from './main/main.component'
import { ExTooltipComponent } from './tooltip/tooltip.component'

@NgModule({
  declarations: [
    ExUserMainComponent,
    ExTooltipComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OthersRoutingModule,
    ElModule,
  ],
  exports: [ExUserMainComponent],
  providers: [],
})
export class OthersModule {
}
