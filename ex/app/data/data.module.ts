import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DataRoutingModule } from './data.routing'
import { ElModule } from '../../../src/element-angular.module'
import { ExSharedModule } from '../shared/module'

import { ExUserMainComponent } from './main/main.component'
import { ExTagComponent } from './tag/tag.component'
import { ExProgressComponent } from './progress/progress.component'
import { ExBadgeComponent } from './badge/badge.component'
import { ExPaginationComponent } from './pagination/pagination.component'
import { ExTableComponent, ExTableDemoComponent } from './table/table.component'

@NgModule({
  declarations: [
    ExUserMainComponent,
    ExTagComponent,
    ExProgressComponent,
    ExBadgeComponent,
    ExPaginationComponent,
    ExTableComponent,
    ExTableDemoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ElModule,
    ExSharedModule,
    DataRoutingModule,
  ],
  exports: [ExUserMainComponent],
  providers: [],
})
export class DataModule {
}
