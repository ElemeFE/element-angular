import { Component, Input, ElementRef, Renderer2, OnInit } from '@angular/core'

@Component({
  selector: 'el-steps',
  template: `
    <div [class]="'el-steps ' + (!simple ? 'el-steps--' + direction : '')"
      [class.el-steps--simple]="simple">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElSteps implements OnInit {
  
  @Input() space: string | number                       //  ex: 10px, 50%
  @Input() direction: string = 'horizontal'     // enum: vertical/horizontal
  @Input() active: number = 0
  @Input() simple: boolean = false
  @Input('process-status') processStatus: string = 'process'
  @Input('finish-status') finishStatus: string = 'finish'     // enum: wait/process/finish/error/success
  @Input('align-center') alignCenter: boolean = false
  
  offset: number = 0
  stepsLength: number = 0
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
  }
  
  ngOnInit(): void {
    const children = this.el.nativeElement.querySelectorAll('el-step')
    if (!children || !children.length) {
      return console.warn('steps components required children')
    }
    children.forEach((el: HTMLElement, index: number) => {
      this.renderer.setAttribute(el, 'el-index', String(index))
    })
    this.stepsLength = children.length
    // this.offset = children[this.stepsLength - 1].getBoundingClientRect().width / (this.stepsLength - 1)
  }
}
