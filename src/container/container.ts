import { Component, ElementRef, Input, OnInit } from '@angular/core'
import { removeNgTag } from '../shared/utils/host'

@Component({
  selector: 'el-container',
  template: `
    <section [class]="'el-container ' + class" [class.is-vertical]="isVertical">
      <ng-content></ng-content>
    </section>
  `,
})
export class ElContainer implements OnInit {
  
  @Input() direction: string = ''
  @Input() class: string
  isVertical: boolean = false
  
  constructor(
    private el: ElementRef,
  ) {
  }
  
  setVertical(isVertical?: boolean): void {
    if (isVertical && this.direction !== 'horizontal') {
      this.isVertical = true
    }
  }
  
  ngOnInit(): void {
    this.isVertical = this.direction === 'vertical'
    removeNgTag(this.el.nativeElement)
  }
  
}
