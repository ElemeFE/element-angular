import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExTooltipComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Radio 单选框', link: '/form/radio' },
    next: { name: 'Input 输入框', link: '/form/input' },
  }
  
  ngOnInit(): void {
  }
}
