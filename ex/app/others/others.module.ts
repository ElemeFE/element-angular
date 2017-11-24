import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { OthersRoutingModule } from './others.routing'
import { ElModule } from '../../../src/element-angular.module'

import { ExUserMainComponent } from './main/main.component'
import { ExTooltipComponent } from './tooltip/tooltip.component'
import { ExSharedModule } from '../shared/module'
import { ExCardComponent } from './card/card.component'
import { ExDialogComponent } from './dialog/dialog.component'
import { ExCarouselComponent } from './carousel/carousel.component'
import { ExCollapseComponent } from './collapse/collapse.component'

@NgModule({
  declarations: [
    ExUserMainComponent,
    ExTooltipComponent,
    ExCardComponent,
    ExDialogComponent,
    ExCarouselComponent,
    ExCollapseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OthersRoutingModule,
    ElModule,
    ExSharedModule,
  ],
  exports: [ExUserMainComponent],
  providers: [],
})
export class OthersModule {
}
