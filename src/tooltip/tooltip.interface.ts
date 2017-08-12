
interface TooltipConfigType {
  hostElement?: any
  effect?: string
  content: string | number
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

export {
  TooltipConfigType,
}
