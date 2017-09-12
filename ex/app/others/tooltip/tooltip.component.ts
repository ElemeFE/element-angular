import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExTooltipComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Steps 步骤条', link: '/nav/steps' },
    next: { name: 'Card 卡片', link: '/others/card' },
  }
  
}
