import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'el-checkbox-group',
  template: `
    <div class="el-checkbox-group" role="group" aria-label="checkbox-group">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElCheckboxGroup implements OnChanges {
  
  @Input() model: any[] = []
  @Input() size: string
  @Input() fill: string = '#20a0ff'
  @Input('text-color') textColor: string = '#ffffff'
  @Input() min: number = 0
  @Input() max: number = 1000
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  // children update handle
  subscriber: Function[] = []
  
  constructor() {
  }
  
  changeModel(nextValue: any): void {
    setTimeout(() => {
      this.model = nextValue
      this.modelChange.emit(nextValue)
      this.subscriber.forEach(sub => sub())
    }, 0)
  }
  
  updateModelFromChildren(t: boolean, label: string): void {
    // add label value
    if (t && this.model.indexOf(label) === -1) {
      if (this.model.length >= this.max) return
      this.model.push(label)
    }
    // remove label value
    if (!t && this.model.indexOf(label) > -1) {
      if (this.model.length < this.min) return
      this.model = this.model.map(v => v === label ? null : v)
        .filter(v => v)
    }
    // synchronize host
    this.changeModel(this.model)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes || !changes.model) return
    if (changes.model.isFirstChange()) return
    this.changeModel(changes.model.currentValue)
  }
}
