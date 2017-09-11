import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
export type Option = {
  value: number,
  label: string
}

@Component({
  selector: 'el-pagination-size',
  template: `
    <el-select [model]="model" (modelChange)="modelChange.emit($event)">
      <el-option *ngFor="let item of options"
        [label]="item.label"
        [value]="item.value">
      </el-option>
    </el-select>
  `,
})
export class ElPaginationSize implements OnInit {
  
  @Input() model: number
  @Input() sizes: number[]
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>()
  
  private options: Option[]
  
  ngOnInit(): void {
    this.options = this.sizes.map(size => ({
      value: size,
      label: size + '条/页',
    }))
  }
  
}
