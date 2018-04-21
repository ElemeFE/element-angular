import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core'
export type ModelValue = string | number

@Component({
  selector: 'el-collapse',
  styles: [`.el-collapse-fix-border { border-bottom: 0; }`],
  template: `
    <div class="el-collapse el-collapse-fix-border" role="tablist" aria-multiselectable="true">
      <ng-content></ng-content>
    </div>
  `,
})
export class ElCollapse implements AfterViewInit {
  
  modelValue: ModelValue[] = []
  subscriber: Function[] = []
  @Input() accordion: boolean = false
  @Input() set model(val: ModelValue[]) {
    this.modelValue = val
    this.updateSubscriber()
  }
  @Output() modelChange: EventEmitter<ModelValue[]> = new EventEmitter<ModelValue[]>()
  
  updateModel(value: ModelValue): void {
    const index = this.modelValue.findIndex(val => val === value)
    if (index < 0) {
      this.accordion && (this.model = [])
      this.modelValue.push(value)
      this.updateSubscriber()
      return this.modelChange.emit(this.modelValue)
    }
    
    if (this.accordion) {
      this.model = []
    } else {
      this.modelValue.splice(index, 1)
    }
    
    this.updateSubscriber()
    this.modelChange.emit(this.modelValue)
  }
  
  ngAfterViewInit(): void {
    const timer: number = window.setTimeout(() => {
      this.updateSubscriber()
      window.clearTimeout(timer)
    }, 0)
  }
  
  private updateSubscriber(): void {
    this.subscriber.forEach(handle => handle())
  }
  
}


