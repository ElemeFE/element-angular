
import { Directive } from '@angular/core'

@Directive({
  selector: '[el-tooltip-host]',
})
export class ElTooltipHostDirective {
  constructor() {
    setInterval(() => {
      console.log(123)
    }, 500)
  }
}