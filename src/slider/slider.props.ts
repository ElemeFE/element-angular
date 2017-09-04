import { EventEmitter, Input, Output } from '@angular/core'

export class ElSliderProps {
  
  @Input() min: number = 0
  @Input() max: number = 100
  @Input() disabled: boolean = false
  @Input() step: number = 1
  
  @Input('show-input') showInput: boolean = false
  @Input('show-input-controls') showInputControls: boolean = true
  @Input('show-tooltip') showTooltip: boolean = true
  @Input('show-stops') showStops: boolean = false
  @Input('format-tooltip') formatTooltip: Function
  
  @Input() vertical: boolean = false
  @Input('vertical-height') height: string
  
  // bind value
  @Input() model: number = 0
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
}
