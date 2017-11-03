import { EventEmitter, Input, Output } from '@angular/core'

export class ElDialogProps {

  @Input() title: string
  @Input() size: string = 'small'             // tiny/small/large/full
  @Input() center: boolean = false
  
  @Input() top: string = '15%'                // css value
  @Input('close-on-click-modal') closeOnClickModal: boolean = true
  @Input('close-on-press-escape') closeOnPressEscape: boolean = true
  
  @Input('lock-scroll') lockScroll: boolean = true    // lock body overflow
  @Input('custom-class') customClass: string
  @Input('show-close') showClose: boolean = true
  @Input('before-close') beforeClose: ((done: Function) => {}) = ((d: Function) => d())
  
  @Input('dialog-zindex') dialogZindex: number = 2000
  @Input('modal-zindex') modalZindex: number = 1999
  
  @Input() visible: boolean = false
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>()
}

