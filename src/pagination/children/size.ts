import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { ElPaginationLocales, ElLocalesService } from '../../locales';
export type Option = {
  value: number,
  label: string
}

@Component({
  selector: 'el-pagination-size',
  template: `
    <el-select [model]="model" (modelChange)="modelChange.emit($event)"
      popper-class="is-arrow-fixed">
      <el-option *ngFor="let item of options"
        [label]="item.label"
        [value]="item.value"></el-option>
    </el-select>
  `,
})
export class ElPaginationSize implements OnInit {
  
  @Input() model: number
  @Input() sizes: number[]
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>()
  
  options: Option[]
  
  constructor(private readonly elLocales: ElLocalesService) {
  }

  ngOnInit(): void {
    this.elLocales.resources$.subscribe(locales => {
      const pagination = locales.el.pagination;
      this.options = this.sizes.map(size => ({
        value: size,
        label: size + pagination.pagesize,
      }))
    })
  }
  
}
