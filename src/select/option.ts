import { Component, Input, OnInit, Optional } from '@angular/core'
import { ElSelect } from './select'

@Component({
  selector: 'el-option',
  template: `
    <li class="el-select-dropdown__item"
      [class.is-disabled]="disabled || rootDisabled"
      [class.selected]="itemSelected"
      (click)="clickHandle($event)">
      <span>{{ label }}</span>
    </li>
  `,
})
export class ElOption implements OnInit {
  
  @Input() value: any
  @Input() label: string | number
  @Input() disabled: boolean = false
  
  rootDisabled: boolean = false
  itemSelected: boolean = false
  
  constructor(
    @Optional() private rootSelect: ElSelect,
  ) {
  }
  
  clickHandle(event: Event): void {
    event.stopPropagation()
    if (this.disabled || this.rootDisabled) return
    this.rootSelect.changeLabel(this.label, this.value)
  }
  
  ngOnInit(): void {
    const updateHandle = () => {
      this.itemSelected = this.value === this.rootSelect.model
      this.itemSelected && this.rootSelect.changeLabel(this.label)
    }
    this.rootDisabled = this.rootSelect.disabled
    updateHandle()
    this.rootSelect.subscriber.push(updateHandle)
  }
}
