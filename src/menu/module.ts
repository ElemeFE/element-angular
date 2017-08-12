import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElMenu } from './menu'
import { ElMenuItem } from './menu-item'


@NgModule({
  declarations: [ElMenu, ElMenuItem],
  exports: [ElMenu, ElMenuItem],
  imports: [CommonModule],
  entryComponents: [ElMenu, ElMenuItem],
})
export class ElMenusModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElMenusModule, providers: [] }
  }
}
