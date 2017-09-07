import { AnimationTriggerMetadata, trigger, state, style, animate, transition } from '@angular/animations'

export const notifyAnimation: AnimationTriggerMetadata = trigger(
  'notifyAnimation', [
    state('*', style({
      opacity: 0,
      visibility: 'hidden',
      transform: 'translate3D(0, 0, 0)',
    })),
    state('false', style({
      opacity: 0,
      visibility: 'hidden',
      transform: 'translate3D(0, -10px, 0)',
    })),
    state('true', style({
      opacity: 1,
      transform: 'translate3D(0, 0, 0)',
      visibility: 'inherit',
    })),
    transition('0 => 1', [
      style({
        opacity: 0,
        visibility: 'inherit',
        transform: 'translate3D(50px, 0, 0)',
      }),
      animate('250ms linear')
    ]),
    transition('1 => 0', [
      style({
        opacity: 1,
        visibility: 'inherit',
        transform: 'translate3D(0px, 0, 0)',
      }),
      animate('250ms linear')
    ]),
  ])
