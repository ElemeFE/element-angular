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
      content: placement,
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
  
  makeElementContent(): HTMLElement {
    const el = document.createElement('div')
    el.innerHTML = `
      <ul>
        <li>
        <p>第一项</p>
        </li>
        <li>
        <p>第二项</p>
        </li>
    </ul>
    `
    return el
  }
  
  ngOnInit(): void {
  }
}
