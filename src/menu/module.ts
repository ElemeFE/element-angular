import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTooltipModule } from '../tooltip/module'
import { ElMenuItemGroup } from './menu-item-group'
import { ElMenuItem } from './menu-item'


@NgModule({
  declarations: [ElMenuItem, ElMenuItemGroup],
  exports: [ElMenuItem, ElMenuItemGroup],
  imports: [CommonModule, ElTooltipModule.forRoot()],
  entryComponents: [ElMenuItem, ElMenuItemGroup],
})
export class ElMenusModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElMenusModule, providers: [] }
  }
}
