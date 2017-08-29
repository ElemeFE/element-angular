import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { DataRoutingModule } from './data.routing'
import { ElModule } from '../../../src/index'
import { ExSharedModule } from '../shared/module'

import { ExUserMainComponent } from './main/main.component'
import { ExTagComponent } from './tag/tag.component'
import { ExProgressComponent } from './progress/progress.component'

@NgModule({
  declarations: [
    ExUserMainComponent,
    ExTagComponent,
    ExProgressComponent,
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
