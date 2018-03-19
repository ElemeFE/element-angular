import { AnimationTriggerMetadata, trigger, state, style, animate, transition } from '@angular/animations'

export const MessageAnimation: AnimationTriggerMetadata = trigger(
  'messageAnimation', [
    state('*', style({
      opacity: 0,
      visibility: 'hidden',
      top: '20px',
    })),
    state('false', style({
      opacity: 0,
      visibility: 'hidden',
      top: '20px',
    })),
    state('true', style({
      opacity: 1,
      visibility: 'inherit',
      top: '50px',
    })),
    transition('* <=> *', animate(`250ms ease-out`)),
  ])
