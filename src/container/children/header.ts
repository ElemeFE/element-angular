import { Component, ElementRef, Input, OnInit } from '@angular/core'
import { ElContainer } from '../container'
import { header } from '../style'
import { removeNgTag } from '../../shared/utils/host'

@Component({
  selector: 'el-header',
  styles: [header],
  template: `
    <header [class]="'el-header ' + class" [ngStyle]="{height: height}">
      <ng-content></ng-content>
    </header>
  `,
})
export class ElHeader implements OnInit {
  
  @Input() height: string = '60px'
  @Input() class: string
  
  constructor(
    private root: ElContainer,
    private el: ElementRef,
  ) {
  }
  
  ngOnInit(): void {
    this.root.setVertical(true)
    removeNgTag(this.el.nativeElement)
  }
}
