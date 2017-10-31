import { AnimationTriggerMetadata, trigger, state, style, animate, transition } from '@angular/animations'

export const fadeAnimation: AnimationTriggerMetadata = trigger(
  'fadeAnimation', [
    state('true', style({
      opacity: 0,
      height: 0,
      border: 0,
      padding: 0,
      margin: 0,
      visibility: 'hidden',
    })),
    state('false', style({
      opacity: 1,
      height: '*',
      border: '*',
      margin: '*',
      padding: '*',
      visibility: 'inherit',
    })),
    transition('* => *', animate(`250ms ease-in-out`)),
  ])
