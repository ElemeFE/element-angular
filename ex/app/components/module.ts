import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ElModule } from '../../../src/element-angular.module'

import { ExHeaderComponent } from './header/header.component'
import { ExSideComponent } from './side/side.component'
import { ExFooterComponent } from './footer/footer.component'


@NgModule({
  declarations: [
    ExHeaderComponent,
    ExSideComponent,
    ExFooterComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ElModule,
  ],
  exports: [
    ExHeaderComponent,
    ExSideComponent,
    ExFooterComponent,
  ],
  providers: [],
})
export class ExComponentModule {
}
