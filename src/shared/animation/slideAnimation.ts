import { AnimationTriggerMetadata, trigger, state, style, animate, transition } from '@angular/animations'

export const slideAnimation: AnimationTriggerMetadata = trigger(
  'slideAnimation', [
    state('false', style({
      opacity: 0,
      transform: 'translate3D(-50%, 0, 0)',
      display: 'none',
    })),
    state('true', style({
      opacity: 1,
      transform: 'translate3D(-50%, 30px, 0)',
      display: 'block',
    })),
    transition('* => *', animate(`250ms ease-out`)),
  ])
