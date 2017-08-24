import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FormRoutingModule } from './form.routing'
import { ElModule } from '../../../src/index'
import { ExSharedModule } from '../shared/module'

import { ExFormMainComponent } from './main/main.component'
import { ExRadioComponent } from './radio/radio.component'
import { ExCheckboxComponent } from './checkbox/checkbox.component'
import { ExInputComponent } from './input/input.component'

@NgModule({
  declarations: [
    ExFormMainComponent,
    ExRadioComponent,
    ExCheckboxComponent,
    ExInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    ElModule,
    ExSharedModule,
  ],
  exports: [ExFormMainComponent],
  providers: [],
})
export class FormModule {
}
