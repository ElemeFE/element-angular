import { EventEmitter, Input, Output } from '@angular/core'

export class ElPaginationProps {

  @Input() small: boolean = false
  @Input() total: number
  @Input() layout: string[] = ['prev', 'pager', 'next', 'total']
  
  @Input('page-size') pageSize: number = 10
  @Input('page-sizes') pageSizes: number[] = [10, 20, 30, 40, 50, 100]
  @Input('page-count') pageCount: number
  
  @Input() model: number = 1          // current page
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>()
  
}
