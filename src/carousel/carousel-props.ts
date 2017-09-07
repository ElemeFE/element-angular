import { EventEmitter, Input, Output } from '@angular/core'

export class ElCarouselProps {

  @Input() height: string = '150px'
  @Input() trigger: string = 'click'            // click, hover
  @Input() indicatorTrigger: string = 'click'            // click, hover
  @Input() autoplay: boolean = true
  @Input() interval: number = 3000
  
  @Input('initial-index') initialIndex: number = 0
  @Input('indicator-position') indicatorPosition: string      // outside, none
  
  @Input() arrow: string = 'hover'    // always, hover, never
  @Input() type: string
  
  @Input() model: number = 0
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any> ()
  
}


