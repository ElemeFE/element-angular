import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BasicRoutingModule } from './basic.routing'
import { ElModule } from '../../../src/index'
import { ExSharedModule } from '../shared/module'

import { ExBasicMainComponent } from './main/main.component'
import { ExButtonComponent } from './button/button.component'
import { ExIconComponent } from './icon/icon.component'
import { ExLayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [
    ExBasicMainComponent,
    ExButtonComponent,
    ExIconComponent,
    ExLayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BasicRoutingModule,
    ElModule,
    ExSharedModule,
  ],
  exports: [ExBasicMainComponent],
  providers: [],
})
export class BasicModule {
}
