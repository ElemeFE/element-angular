import { AnimationTriggerMetadata, trigger, state, style, animate, transition } from '@angular/animations'

export const dropAnimation: AnimationTriggerMetadata = trigger(
  'dropAnimation', [
    state('*', style({
      opacity: 0,
      height: 0,
      border: 0,
      padding: 0,
      visibility: 'hidden',
    })),
    state('false', style({
      opacity: 0,
      height: 0,
      border: 0,
      padding: 0,
      visibility: 'hidden',
    })),
    state('true', style({
      opacity: 1,
      height: '*',
      border: '*',
      padding: '*',
      visibility: 'inherit',
    })),
    transition('* => *', animate(`250ms ease-out`)),
  ])
