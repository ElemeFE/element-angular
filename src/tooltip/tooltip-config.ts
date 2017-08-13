import { Injectable } from '@angular/core'
import { TooltipConfigType } from './tooltip.interface'

@Injectable()
export class ElTooltipConfig implements TooltipConfigType {
  hostElement: any
  effect: string = 'dark'
  content: any
  placement: string = 'bottom'
  value: boolean = false
  disabled: boolean = false
  offset: number = 0
  transition: string = 'ease-in-out'
  'visible-arrow': boolean = true
  'open-delay': number = 0
  manual: boolean = false
  'popper-class': string
  enterable: boolean = true
}

