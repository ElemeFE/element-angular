import { AnimationTriggerMetadata, trigger, state, style, animate, transition } from '@angular/animations'

export const notifyAnimation: AnimationTriggerMetadata = trigger(
  'notifyAnimation', [
    state('*', style({
      opacity: 0,
      display: 'none',
      transform: 'translate3D(0, 0, 0)',
    })),
    state('false', style({
      opacity: 0.3,
      display: 'none',
      transform: 'translate3D(0, -10px, 0)',
    })),
    state('true', style({
      opacity: 1,
      transform: 'translate3D(0, 0, 0)',
      display: 'block',
    })),
    transition('0 => 1', [
      style({
        opacity: 0.3,
        display: 'none',
        transform: 'translate3D(50px, 0, 0)',
      }),
      animate('250ms linear')
    ]),
    transition('1 => 0', [
      style({
        opacity: 1,
        display: 'block',
        transform: 'translate3D(0px, 0, 0)',
      }),
      animate('250ms linear')
    ]),
  ])
