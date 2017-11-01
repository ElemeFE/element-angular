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
  
  @Input() accordion: boolean = false
  @Input() model: ModelValue[] = []
  @Output() modelChange: EventEmitter<ModelValue[]> = new EventEmitter<ModelValue[]>()
  
  constructor() {
  }
  
  updateModel(value: ModelValue): void {
    const index = this.model.findIndex(val => val === value)
    if (index < 0) {
      this.accordion && (this.model = [])
      this.model.push(value)
      return this.modelChange.emit(this.model)
    }
    if (this.accordion) {
      this.model = []
    } else {
      this.model.splice(index, 1)
    }
    this.modelChange.emit(this.model)
  }
  
}


