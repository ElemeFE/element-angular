import { AnimationTriggerMetadata, trigger, state, style, animate, transition } from '@angular/animations'

export const fadeAnimation: AnimationTriggerMetadata = trigger(
  'fadeAnimation', [
  state('true', style({
    opacity: 0,
    display: 'none'
  })),
  state('false', style({
    opacity: 1,
    display: 'block'
  })),
  transition('* => *', animate(`250ms ease-in-out`)),
])
