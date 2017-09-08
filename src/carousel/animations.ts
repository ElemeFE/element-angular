import { AnimationTriggerMetadata, trigger, state, style, animate, transition } from '@angular/animations'

export const carouselBtnLeftAnimation: AnimationTriggerMetadata = trigger(
  'carouselBtnLeftAnimation', [
    state('*', style({
      opacity: 0,
      visibility: 'hidden',
      transform: 'translate3D(-15px, -50%, 0)',
    })),
    state('false', style({
      opacity: 0,
      visibility: 'hidden',
      transform: 'translate3D(-15px, -50%, 0)',
    })),
    state('true', style({
      opacity: 1,
      transform: 'translate3D(0, -50%, 0)',
      visibility: 'inherit',
    })),
    transition('* <=> *', animate(`250ms ease-out`)),
  ])

export const carouselBtnRightAnimation: AnimationTriggerMetadata = trigger(
  'carouselBtnRightAnimation', [
    state('*', style({
      opacity: 0,
      visibility: 'hidden',
      transform: 'translate3D(15px, -50%, 0)',
    })),
    state('false', style({
      opacity: 0,
      visibility: 'hidden',
      transform: 'translate3D(15px, -50%, 0)',
    })),
    state('true', style({
      opacity: 1,
      transform: 'translate3D(0, -50%, 0)',
      visibility: 'inherit',
    })),
    transition('* <=> *', animate(`250ms ease-out`)),
  ])
