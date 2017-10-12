import { Component, ElementRef, Input, OnInit } from '@angular/core'
import { removeNgTag } from '../../shared/utils'
import { aside } from '../style'

@Component({
  selector: 'el-aside',
  styles: [aside],
  template: `
    <aside class="el-aside" [ngStyle]="{width: width}">
      <ng-content></ng-content>
    </aside>
  `,
})
export class ElAside implements OnInit {
  
  @Input() width: string = '300px'
  
  constructor(
    private el: ElementRef,
  ) {
  }
  
  ngOnInit(): void {
    removeNgTag(this.el.nativeElement)
  }
}
