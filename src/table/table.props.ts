import { EventEmitter, Input, Output } from '@angular/core'
import { TableSelectEvent, ElTableSlotEvent } from './table.interface'

export class ElTableProps {
  
  @Input() height: string | number = 'auto'
  // @Input('max-height') maxHeight: string
  @Input() placeholder: string = '暂无数据'
  
  @Input() stripe: boolean = false
  @Input() border: boolean = false
  @Input('scroll-x') scrollX: boolean = false
  @Input('show-header') showHeader: boolean = true
  @Input('center') center: string = ''
  @Input('row-class-name') rowClassName: (userRow: any, index: number) => string
  
  // bind value
  @Input() model: any = 0
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  @Output() select: EventEmitter<TableSelectEvent> = new EventEmitter<TableSelectEvent>()
  @Output('select-all') selectAll: EventEmitter<TableSelectEvent> = new EventEmitter<TableSelectEvent>()
  @Output('selection-change') selectionChange: EventEmitter<TableSelectEvent> = new EventEmitter<TableSelectEvent>()
  
  @Output('cell-mouse-enter') cellMouseEnter: EventEmitter<Event> = new EventEmitter<Event>()
  @Output('cell-mouse-leave') cellMouseLeave: EventEmitter<Event> = new EventEmitter<Event>()
  @Output('cell-click') cellClick: EventEmitter<ElTableSlotEvent> = new EventEmitter<ElTableSlotEvent>()
  @Output('cell-dblclick') cellDblclick: EventEmitter<ElTableSlotEvent> = new EventEmitter<ElTableSlotEvent>()
  
}

