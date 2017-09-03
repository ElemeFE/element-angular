import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElCard } from './card'


@NgModule({
  declarations: [ElCard],
  exports: [ElCard],
  imports: [CommonModule],
  entryComponents: [ElCard],
})
export class ElCardsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElCardsModule, providers: [] }
  }
}
