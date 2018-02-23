import { EventEmitter, Input, Output } from '@angular/core'

export class ElDropdownProps {

  @Input() model: string[]
  @Input('split-button') splitButton: boolean = false
  // only splitButton = true
  @Input() size: string
  @Input() type: string

  // style
  @Input('menu-align') menuAlign: string = 'end'
  @Input('menu-no-wrap') menuNoWrap: boolean = false

  // trigger type
  @Input() trigger: string = 'hover'
  @Input('hide-on-click') hideOnClick: boolean = true

  // event
  @Output('visible-change') visibleChange: EventEmitter<any> = new EventEmitter<any>()
  @Output() selected: EventEmitter<any> = new EventEmitter<any>()
}
