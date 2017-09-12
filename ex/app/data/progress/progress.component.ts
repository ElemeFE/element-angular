import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExProgressComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Tag 标签', link: '/data/tag' },
    next: { name: 'Badge 标记', link: '/data/badge' },
  }

}
