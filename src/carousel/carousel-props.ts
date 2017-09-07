import { EventEmitter, Input, Output } from '@angular/core'

export class ElCarouselProps {

  @Input() height: string
  @Input() trigger: string = 'click'            // click, hover
  @Input() autoplay: boolean = true
  @Input() interval: number = 3000
  
  @Input('initial-index') initialIndex: number = 0
  @Input('indicator-position') indicatorPosition: string      // outside, none
  
  @Input() arrow: string = 'hover'    // always, hover, never
  @Input() type: string = 'card'
  
  @Input() model: any = ''
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any> ()
  
}


