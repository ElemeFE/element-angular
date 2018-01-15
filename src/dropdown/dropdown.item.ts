import { Component, EventEmitter, Input, Output } from '@angular/core'

export type Value = {
  label: string ,
  value: string | number,
  elDisabled?: boolean,
  divided?: boolean
}
@Component({
  selector: 'el-dropdown-item',
  template: `
    <li class="el-dropdown-menu__item"
    [class.is-disabled]="model.elDisabled"
    [class.el-dropdown-menu__item--divided]="model.divided"
    (click)="handleClick($event)">
      {{model.label}}
    </li>
  `,
})
export class ElDropdownItem {
  
  @Input() model: Value
  @Output() selected: EventEmitter<any> = new EventEmitter<any>()
  
  handleClick(event: Event): void {
    if (this.model.elDisabled) return
    event.stopPropagation()
    this.selected.emit(this.model)
  }

}
