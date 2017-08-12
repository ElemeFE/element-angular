import { Component, OnInit,  } from '@angular/core'

@Component({
  selector: 'my-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  
  makeTooltipSetting(placement: string): any {
    return {
      effect: 'dark',
      content: `placement is ${placement}`,
      placement: placement,
    }
  }
  
  ngOnInit(): void {
  }
}
