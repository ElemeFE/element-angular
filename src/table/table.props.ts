import { EventEmitter, Input, Output } from '@angular/core'
import { SafeStyle } from '@angular/platform-browser'
import {
  TableSelectEvent, TableChangeEvent, FilterChangeEvent, RowChangeEvent, TableDragendEvent,
  expandEvent, TableColumnDataItem, ElTableSlotEvent,
} from './table.interface'

export class ElTableProps {
  
  @Input() height: string | number = 'auto'
  @Input('max-height') maxHeight: string
  @Input() placeholder: string
  
  @Input() stripe: boolean = false
  @Input() border: boolean = false
  @Input() fit: boolean = true
  @Input('show-header') showHeader: boolean = true
  @Input('current-row-key') currentRowKey: string
  @Input('highlight-current-row') highlightCurrentRow: boolean = false
  @Input('row-class-name') rowClassName: (userRow: any, index: number) => string
  @Input('row-style') rowStyle: (userRow: any, index: number) => string | SafeStyle
  @Input('expand-row-keys') expandRowKeys: any[]
  
  @Input('tooltip-effect') tooltipEffect: string
  @Input('show-summary') showSummary: boolean = false
  @Input('sum-text') sumText: string = '合计'
  @Input('summary-method') summaryMethod: (columns: number, data: any) => any
  
  
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
  
  @Output('row-click') rowClick: EventEmitter<TableChangeEvent> = new EventEmitter<TableChangeEvent>()
  @Output('row-contextmenu') rowContextmenu: EventEmitter<TableChangeEvent> = new EventEmitter<TableChangeEvent>()
  @Output('row-dblclick') rowDblclick: EventEmitter<TableChangeEvent> = new EventEmitter<TableChangeEvent>()
  @Output('header-click') headerClick: EventEmitter<TableChangeEvent> = new EventEmitter<TableChangeEvent>()
  
  @Output('filter-change') filterChange: EventEmitter<FilterChangeEvent> = new EventEmitter<FilterChangeEvent>()
  @Output('current-change') currentChange: EventEmitter<RowChangeEvent> = new EventEmitter<RowChangeEvent>()
  @Output('header-dragend') headerDragend: EventEmitter<TableDragendEvent> = new EventEmitter<TableDragendEvent>()
  @Output('expand') expand: EventEmitter<expandEvent> = new EventEmitter<expandEvent>()
  
}

