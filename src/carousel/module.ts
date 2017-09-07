import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElCarousel } from './carousel'
import { ElCarouselItem } from './carousel-item'


@NgModule({
  declarations: [ElCarousel, ElCarouselItem],
  exports: [ElCarousel, ElCarouselItem],
  imports: [CommonModule],
  entryComponents: [ElCarousel],
})
export class ElCarouselModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ElCarouselModule, providers: [] }
  }
}
