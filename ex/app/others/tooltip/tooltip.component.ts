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
  
  makeStringContent(): string {
    return `
      <div>
        <p>一段文字</p>
      </div>
    `
  }
  
  makeElementContent(): string {
    return `
      <div>
        <el-button>123</el-button>
      </div>
    `
  }
  
  ngOnInit(): void {
  }
}
