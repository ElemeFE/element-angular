import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ExHeaderComponent } from './header/header.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    ExHeaderComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  exports: [ExHeaderComponent],
  providers: [],
})
export class ExComponentModule {
}
