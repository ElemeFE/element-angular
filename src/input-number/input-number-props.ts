import { EventEmitter, Input, Output } from '@angular/core'

export class ElInputNumberPoprs {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.')
  }
  @Input() elDisabled: boolean = false
  @Input() min: number = 0
  @Input() max: number = Number.MAX_SAFE_INTEGER
  @Input() step: number = 1
  @Input() size: string                 // enum: large, small
  @Input() controls: boolean = true
  @Input() debounce: number = 300
  
  // bind value
  @Input() model: any = ''
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number> ()
  
}
