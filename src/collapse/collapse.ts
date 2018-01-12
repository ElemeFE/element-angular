import { Component, EventEmitter, Input, Output } from '@angular/core'
export type ModelValue = string | number

@Component({
  selector: 'el-collapse',
  template: `
    <div class="el-collapse" role="tablist" aria-multiselectable="true">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElCollapse {
  
  modelValue: ModelValue[] = []
  @Input() accordion: boolean = false
  @Input() set model(val: ModelValue[]) {
    this.modelValue = val
  }
  @Output() modelChange: EventEmitter<ModelValue[]> = new EventEmitter<ModelValue[]>()
  
  updateModel(value: ModelValue): void {
    const index = this.modelValue.findIndex(val => val === value)
    if (index < 0) {
      this.accordion && (this.model = [])
      this.modelValue.push(value)
      return this.modelChange.emit(this.modelValue)
    }
    if (this.accordion) {
      this.model = []
    } else {
      this.modelValue.splice(index, 1)
    }
    this.modelChange.emit(this.modelValue)
  }
  
}


