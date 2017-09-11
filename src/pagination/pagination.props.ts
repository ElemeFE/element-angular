import { EventEmitter, Input, Output } from '@angular/core'

export class ElPaginationProps {

  @Input() small: boolean = false
  @Input() total: number
  @Input() layout: string[] = ['prev', 'pager', 'next', 'jumper', 'total']
  
  @Input('page-size') pageSize: number = 10
  @Input('page-sizes') pageSizes: number[]
  @Input('page-count') pageCount: number
  
  @Input() model: number = 1          // current page
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>()
  
}
