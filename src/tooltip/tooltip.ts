import {
  AfterContentInit, ChangeDetectionStrategy, Component, ElementRef,
} from '@angular/core'

@Component({
  selector: 'el-tooltip2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!--<div [hidden]="!showPopper || disabled"-->
      <!--[class]="'el-tooltip__popper is-' + effect + ' ' + popperClass"-->
      <!--[popper]="content"-->
      <!--[popperPlacement]="popperPlacement"-->
      <!--[popperTrigger]="'click'"-->
    <!--&gt;-->
    <!--</div>-->
  `,
})
export class ElTooltip implements AfterContentInit {
  
  // @Input() hostElement: any
  // @Input() effect: string = 'dark'
  // @Input() content: string
  // @Input('placement') popperPlacement: string = 'bottom'
  // @Input() value: boolean = false
  // @Input() disabled: boolean = false
  // @Input() offset: number = 0
  // @Input() transition: string = 'el-fade-in-linear'
  // @Input('visible-arrow') visibleArrow: boolean = true
  // @Input('popper-options') popperOptions: any = { boundariesElement: 'body', gpuAcceleration: false }
  // @Input('open-delay') openDelay: number = 0
  // @Input() manual: boolean = false
  // @Input('popper-class') popperClass: string
  // @Input() enterable: boolean = true
  
  constructor(private el: ElementRef) {
  }
  
  
  ngAfterContentInit() :void {
  }
  
}
