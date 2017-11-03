import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'el-pagination-jump',
  template: `
    <span class="el-pagination__jump">
      前往
    <div class="el-input el-pagination__editor is-in-pagination">
      <input class="el-input__inner" type="number" #input
        autocomplete="off" rows="2"
        [min]="1" [max]="max" [ngModel]="model"
        (keyup.enter)="changeHandle(input.value)" (blur)="changeHandle(input.value)"/>
    </div>
      页
    </span>
  `,
})
export class ElPaginationJump {
  
  @Input() model: number
  @Input() max: number
  @Output() next: EventEmitter<number> = new EventEmitter<number>()
  
  static nextPageNumber(page: number, max: number): number {
    if (page <= 1) return 1
    if (page >= max) return max
    return page
  }
  
  changeHandle(nextValue: number): void {
    if (Number.isNaN(+ nextValue)) return
    const next: number = ElPaginationJump.nextPageNumber(+ nextValue, this.max)
    const pre: number = this.model
    this.model = Math.round(next)
    this.next.emit(this.model - pre)
  }
  
}
