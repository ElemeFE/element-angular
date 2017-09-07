import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElCarousel } from './carousel'


@NgModule({
  declarations: [ElCarousel],
  exports: [ElCarousel],
  imports: [CommonModule],
  entryComponents: [ElCarousel],
})
export class ElCarouselModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElCarouselModule, providers: [] }
  }
}
