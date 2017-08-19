import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FormRoutingModule } from './form.routing'
import { ElModule } from '../../../src/index'

import { MainComponent } from './main/main.component'
import { RadioComponent } from './radio/radio.component'

@NgModule({
  declarations: [
    MainComponent,
    RadioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    ElModule,
  ],
  exports: [MainComponent],
  providers: [],
})
export class FormModule {
}
