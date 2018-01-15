import { EventEmitter, Input, Output } from '@angular/core'

export class ElSliderProps {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.')
  }
  @Input() elDisabled: boolean = false
  @Input() min: number = 0
  @Input() max: number = 100
  
  // @Input('show-input') showInput: boolean = false
  // @Input('show-input-controls') showInputControls: boolean = true
  @Input('show-tooltip') showTooltip: boolean = true
  @Input('format-tooltip') formatTooltip: Function
  
  @Input() vertical: boolean = false
  @Input('vertical-height') height: number = 200
  
  // bind value
  @Input() model: number = 0
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
}
