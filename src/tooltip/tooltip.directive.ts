import {
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core'
import { TooltipConfigType } from './tooltip.interface'
import { ElTooltipConfig } from './tooltip-config'
import { Utils } from '../shared'

@Directive({
  selector: '[el-tooltip]',
  host: { '[class.el-tooltip]': 'true' },
  providers: [ElTooltipConfig],
})
export class ElTooltipDirective {
  
  @HostListener('mouseenter') enter() {
    // check tooltip config
    this.tooltipConfigChecked = Object.assign(this.config, this.tooltipConfig)
    // try get tooltip
    this.tooltipNativeElement = document.getElementById(this.uuid)
    // not first
    if (this.tooltipNativeElement) {
      return this.justToggleElement(true)
    }
    // create tooltip
    const tips: HTMLElement = document.createElement('div')
    tips.innerHTML = this.makeTooltipTmp(this.tooltipConfigChecked, this.uuid)
    document.body.appendChild(tips)
    this.tooltipNativeElement = document.getElementById(this.uuid)
    
    // get hidden shape
    this.shape = Utils.getHiddenShape(this.tooltipNativeElement)
    this.justToggleElement(true)
  }
  
  @HostListener('mouseleave') leave() {
    this.justToggleElement(false)
  }
  @Input('el-tooltip') tooltipConfig: TooltipConfigType
  
  constructor(
    private el: ElementRef,
    private config: ElTooltipConfig,
  ) {
  }
  
  private tooltipNativeElement: HTMLElement
  private tooltipConfigChecked: ElTooltipConfig
  private shape: any
  private uuid: string = `_el-tooltip-template-${Math.random()}`
  
  makeTooltipTmp(context: TooltipConfigType, uuid: string): string {
    return `
      <div class="el-tooltip__popper is-${context.effect} popperClass"
        style="position: absolute; display: none;"
        x-placement="top"
        id="${uuid}"
      >
      <div x-arrow class="popper__arrow" style="display: ${context['visible-arrow'] ? 'block' : 'none'}"></div>
      ${context.content}
      </div>
    `
  }
  
  justToggleElement(toggle: boolean) {
    this.placementToOrigin(this.tooltipConfigChecked.placement)
    const showElement = toggle && !this.tooltipConfigChecked.disabled
    this.tooltipNativeElement.style.display = showElement ? 'block' : 'none'
  }
  
  setPopperElementPosition(position: any) {
    this.tooltipNativeElement.style.left = `${position.left}px`
    this.tooltipNativeElement.style.top = `${position.top}px`
    this.tooltipNativeElement.setAttribute('x-placement', position.arrowFace)
    // arrow is show
    if (this.tooltipConfigChecked['visible-arrow']) {
      const arrowElement: Element = this.tooltipNativeElement.querySelector('.popper__arrow')
      arrowElement.setAttribute('style', `${position.arrowDir}: ${position.arrowPosition}px`)
    }
  }
  
  placementToOrigin(placement: string) {
    const hostRect = Utils.getBoundingClientRect(this.el.nativeElement.children[0])
  
    const doubleConventions = placement.includes('-')
    const arrowDir = doubleConventions ? placement.split('-')[1] : 'center'
    const dir = doubleConventions ? placement.split('-')[0] : placement
    const position = Utils.getPositionForDir(hostRect, this.shape, dir, arrowDir)
    this.setPopperElementPosition(position)
  }
  
}
