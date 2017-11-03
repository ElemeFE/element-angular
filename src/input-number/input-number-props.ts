import { EventEmitter, Input, Output } from '@angular/core'

export class ElInputNumberPoprs {
  
  @Input() min: number = 0
  @Input() max: number = Number.MAX_SAFE_INTEGER
  @Input() step: number = 1
  @Input() size: string                 // enum: large, small
  @Input() disabled: boolean = false
  @Input() controls: boolean = true
  @Input() debounce: number = 300
  
  // bind value
  @Input() model: any = ''
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number> ()
  
}
