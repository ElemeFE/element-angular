
interface TooltipConfigType {
  hostElement?: any
  effect?: string
  content: any
  placement?: string
  value?: boolean
  disabled?: boolean
  offset?: number
  transition?: string
  'visible-arrow'?: boolean
  'open-delay'?: number
  manual?: boolean
  'popper-class'?: string
  enterable?: boolean
}

interface PositionType {
  top: number,
  left: number,
  arrowPosition: number,
  arrowDir: string,
  arrowFace: string,
}
export {
  TooltipConfigType,
  PositionType,
}
