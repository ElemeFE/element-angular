import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BasicRoutingModule } from './basic.routing'
import { ElModule } from '../../../src/element-angular.module'
import { ExSharedModule } from '../shared/module'

import { ExBasicMainComponent } from './main/main.component'
import { ExButtonComponent } from './button/button.component'
import { ExIconComponent } from './icon/icon.component'
import { ExLayoutComponent } from './layout/layout.component'
import { ExColorComponent } from './color/color.component'
import { ExFontComponent } from './font/font.component'
import { ExContainerComponent } from './container/container.component'

@NgModule({
  declarations: [
    ExBasicMainComponent,
    ExButtonComponent,
    ExIconComponent,
    ExLayoutComponent,
    ExColorComponent,
    ExFontComponent,
    ExContainerComponent,
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
