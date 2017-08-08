import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BasicRoutingModule } from './basic.routing'
import { ElModule } from '../../../src/index'

import { MainComponent } from './main/main.component'
import { ButtonComponent } from './button/button.component'

@NgModule({
  declarations: [
    MainComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BasicRoutingModule,
    ElModule,
  ],
  exports: [MainComponent],
  providers: [],
})
export class BasicModule {
}