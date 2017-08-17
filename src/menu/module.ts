import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTooltipModule } from '../tooltip/module'
import { ElMenuItemGroup } from './menu-item-group'
import { ElMenuItem } from './menu-item'
import { ElSubmenu } from './submenu'
import { ElMenu } from './menu'


@NgModule({
  declarations: [ElMenu, ElSubmenu, ElMenuItem, ElMenuItemGroup],
  exports: [ElMenu, ElSubmenu, ElMenuItem, ElMenuItemGroup],
  imports: [CommonModule, ElTooltipModule.forRoot()],
  entryComponents: [ElMenu, ElSubmenu, ElMenuItem, ElMenuItemGroup],
})
export class ElMenusModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElMenusModule, providers: [] }
  }
}
