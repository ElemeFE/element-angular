import { AnimationTriggerMetadata, trigger, state, style, animate, transition } from '@angular/animations'

export const dialogFadeAnimation: AnimationTriggerMetadata = trigger(
  'dialogFadeAnimation', [
    state('*', style({
      opacity: 0,
      visibility: 'hidden',
      transform: 'translate3D(0, -25px, 0)',
    })),
    state('false', style({
      opacity: 0,
      visibility: 'hidden',
      transform: 'translate3D(0, -25px, 0)',
    })),
    state('true', style({
      opacity: 1,
      transform: 'translate3D(0, 0, 0)',
      visibility: 'inherit',
    })),
    transition('* <=> *', animate(`250ms ease-in-out`)),
  ])
