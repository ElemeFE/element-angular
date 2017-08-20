import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { ExHeaderComponent } from './header/header.component'
import { ExSideComponent } from './side/side.component'

@NgModule({
  declarations: [
    ExHeaderComponent,
    ExSideComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    ExHeaderComponent,
    ExSideComponent,
  ],
  providers: [],
})
export class ExComponentModule {
}
