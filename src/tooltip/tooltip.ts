import {
  AfterContentInit, Component, ContentChild, ElementRef, Input,
  Renderer2, TemplateRef, ViewChild,
} from '@angular/core'
import { fadeAnimation } from '../shared/animation'
import { WindowWrapper } from '../shared/services'
import { getRealShape, getPositionForDir } from '../shared/utils'

export type Shape = { width: number, height: number }

@Component({
  selector: 'el-tooltip',
  template: `
    <div style="position: relative; display: inline-block;">
      <div [class]="'el-tooltip__popper is-' + effect + ' ' + popperClass"
        style="left: -20000px; top: 0; position: absolute;"
        [@fadeAnimation]="!showPopper" [attr.x-placement]="xPlacement" #popperContent>
        <div x-arrow class="popper__arrow" [hidden]="!visibleArrow"></div>
        <ng-template [ngTemplateOutlet]="tip"></ng-template>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  animations: [fadeAnimation],
})
export class ElTooltip implements AfterContentInit {
  
  @Input() disabled: boolean = false
  @Input() watch: boolean = false
  @Input() placement: string = 'bottom'
  @Input() popperClass: string
  @Input() effect: string = 'dark'
  @Input('visible-arrow') visibleArrow: boolean = true
  @ViewChild('popperContent') popperContent: ElementRef
  @ContentChild('tip') tip: TemplateRef<any>
  
  xPlacement: string = 'bottom'
  showPopper: boolean = true
  cache: any = {}
  tipElementShape: Shape
  
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private window: WindowWrapper,
  ) {
  }
  
  // get rect
  getPosition(hostRect: any, selfRect: any): void {
    const doubleConventions: boolean = this.placement.includes('-')
    const arrowDir: string = doubleConventions ? this.placement.split('-')[1] : 'center'
    const dir: string = doubleConventions ? this.placement.split('-')[0] : this.placement
    const position: any = getPositionForDir(hostRect, selfRect, dir, arrowDir)
    this.cache.position = position
    this.cache.hostRect = hostRect
  }
  
  setPopoerPositionAndShow(): void {
    const { tipElement, position } = this.cache
    const arrowElement: Element = tipElement.querySelector('.popper__arrow')
    this.xPlacement = position.arrowFace
    this.renderer.setStyle(tipElement, 'left', `${position.left}px`)
    this.renderer.setStyle(tipElement, 'top', `${position.top}px`)
    
    // fix tipbox auto wrap
    this.renderer.setStyle(tipElement, 'width', `${this.tipElementShape.width}px`)
    this.renderer.setStyle(tipElement, 'height', `${this.tipElementShape.height}px`)
    this.renderer.setStyle(arrowElement, position.arrowDir, `${position.arrowPosition}px`)
  }
  
  bindEvent(host: HTMLElement): void {
    host.addEventListener('mouseenter', () => {
      if (this.disabled) return
      this.setPopoerPositionAndShow()
      this.showPopper = true
    })
    host.addEventListener('mouseleave', () => {
      this.showPopper = false
      this.watch && this.update()
    })
  }
  
  update(): void {
    const { tipElement, hostRect } = this.cache
    this.renderer.setStyle(tipElement, 'width', 'auto')
    this.renderer.setStyle(tipElement, 'height', 'auto')
    setTimeout(() => {
      this.tipElementShape = getRealShape(tipElement)
      const tipRect = { width: tipElement.offsetWidth, height: tipElement.offsetHeight }
      this.getPosition(hostRect, tipRect)
      this.renderer.setStyle(tipElement, 'width', `${this.tipElementShape.width}px`)
      this.renderer.setStyle(tipElement, 'height', `${this.tipElementShape.height}px`)
    }, 0)
  }
  
  ngAfterContentInit(): void {
    const tipElement: HTMLElement = this.popperContent.nativeElement
    const hostElement: HTMLElement = this.el.nativeElement.children[0]
    this.bindEvent(hostElement)
    this.cache.tipElement = tipElement
  
    const timer = setTimeout(() => {
      this.tipElementShape = getRealShape(tipElement)
      const tipRect = { width: tipElement.offsetWidth, height: tipElement.offsetHeight }
      const hostRect = hostElement.getBoundingClientRect()
      this.getPosition(hostRect, tipRect)
      clearTimeout(timer)
    }, 0)
  }
}
