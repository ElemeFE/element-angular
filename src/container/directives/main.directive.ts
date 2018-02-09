import { Directive } from '@angular/core'
import { NgClass, NgStyle } from '@angular/common'

@Directive({
  selector: '[el-main]',
  providers: [NgClass, NgStyle],
  host: { class: 'el-main' },
})
export class ElMainDirective {

}
