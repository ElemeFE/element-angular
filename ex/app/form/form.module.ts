import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FormRoutingModule } from './form.routing'
import { ElModule } from '../../../src/index'

import { ExFormMainComponent } from './main/main.component'
import { ExRadioComponent } from './radio/radio.component'
import { ExCheckboxComponent } from './checkbox/checkbox.component'

@NgModule({
  declarations: [
    ExFormMainComponent,
    ExRadioComponent,
    ExCheckboxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    ElModule,
  ],
  exports: [ExFormMainComponent],
  providers: [],
})
export class FormModule {
}
