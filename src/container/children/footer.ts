import { Component, ElementRef, Input } from '@angular/core'
import { ElContainer } from '../container'
import { removeNgTag } from '../../shared/utils/host'

@Component({
  selector: 'el-footer',
  template: `
    <footer [class]="'el-footer ' + class" [ngStyle]="{height: height}">
      <ng-content></ng-content>
    </footer>
  `,
})
export class ElFooter {
  
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
