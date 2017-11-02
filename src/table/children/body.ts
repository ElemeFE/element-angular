import {
  SimpleChanges, Component, Input, OnChanges, EventEmitter, Output,
} from '@angular/core'
import { ElTableSlotEvent, TableColumnDataItem } from '../table.interface'
import { ElTableFormat } from '../utils/format'

@Component({
  selector: 'el-table-body',
  template: `
    <table class="el-table__body" [ngStyle]="{ width: getBodyWidth() | cssValue }"
      cellspacing="0" cellpadding="0" border="0">
      <tr *ngFor="let tr of model; let k = index" #tableRow
        [hidden]="tr.hidden"
        [class]="makeRowClass(k)"
        [class.hover-row]="tableRow.hover"
        [class.el-table__row--striped]="stripe && k % 2 === 1"
        (mouseenter)="tableRow.hover = true" (mouseleave)="tableRow.hover = false">
        <td *ngFor="let td of tr; let i = index;"
          [ngStyle]="{ width: td.width | cssValue }" #tdRef
          [class]="'el-table_1_column_' + (i + 1)"
          (mouseenter)="cellMouseActionHandle($event, true);tdRef.destroy = destroyRowFunc(k);"
          (mouseleave)="cellMouseActionHandle($event, false)"
          (click)="clickHandle($event, tdRef)"
          (dblclick)="doubleClickHandle($event, tdRef)">
          <div class="cell">
            <ng-container *ngIf="!isTemplateRef(td.value)">{{td.value}}</ng-container>
            <ng-container *ngIf="isTemplateRef(td.value)">
              <ng-template [ngTemplateOutlet]="td.value" [ngTemplateOutletContext]="{
                scope: merge(tdRef, {rowData: getFormatModel(k), index: k})
              }"></ng-template>
            </ng-container>
          </div>
        </td>
      </tr>
    </table>
  `,
})
export class ElTableBody implements OnChanges {
  
  @Input('model') model: TableColumnDataItem[][]
  @Input() stripe: boolean = false
  @Input() layout: any
  @Input('row-class-name') rowClassName: (userRow: any, index: number) => string
  @Output('cell-click') cellClick: EventEmitter<ElTableSlotEvent> = new EventEmitter<ElTableSlotEvent>()
  @Output('cell-dblclick') cellDblClick: EventEmitter<ElTableSlotEvent> = new EventEmitter<ElTableSlotEvent>()
  @Output('cell-mouse-enter') cellMouseEnter: EventEmitter<Event> = new EventEmitter<Event>()
  @Output('cell-mouse-leave') cellMouseLeave: EventEmitter<Event> = new EventEmitter<Event>()
  
  formatModel: any[] = []
  
  constructor(
    public tableFormat: ElTableFormat,
  ) {
  }
  
  merge(domHandle: any, next: any): any {
    return Object.assign(domHandle, next)
  }
  
  isTemplateRef(content: any): boolean {
    return content && typeof content !== 'string'
  }
  
  getBodyWidth(): number {
    const width:number = ElTableFormat.getCSSValue(this.layout.bodyWidth)
    if (!width) return this.layout.bodyWidth
    return width - this.layout.scrollBarWidth
  }
  
  getFormatModel(index: number): any {
    return this.formatModel[index]
  }
  
  destroyRowFunc(index: number): Function {
    return (): void => {
      this.model.splice(index, 1)
      this.formatModel = this.tableFormat.formatRowData(this.model)
    }
  }
  
  makeRowClass(index: number): string {
    const userRows = this.formatModel[index]
    const userClass: string = this.rowClassName ? this.rowClassName(userRows, index) : ''
    return 'el-table__row ' + userClass
  }
  
  doubleClickHandle(event: Event, Ref: any): void {
    Ref.event = event
    this.cellDblClick.emit(Ref)
  }
  
  clickHandle(event: Event, Ref: any): void {
    Ref.event = event
    this.cellClick.emit(Ref)
  }
  
  cellMouseActionHandle(event: Event, isEnter: boolean): void {
    if (isEnter) return this.cellMouseEnter.emit(event)
    this.cellMouseLeave.emit(event)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    this.formatModel = this.tableFormat.formatRowData(this.model)
  }
  
}
