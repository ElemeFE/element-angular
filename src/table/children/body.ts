import { SimpleChanges, Component, Input, OnChanges } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { TableColumnDataItem } from '../table.interface'
import { ElTableFormat } from '../utils/format'

@Component({
  selector: 'el-table-body',
  template: `
    <table class="el-table__body" [ngStyle]="{width: width + 'px'}"
      cellspacing="0" cellpadding="0" border="0">
      <tr *ngFor="let tr of model; let k = index" #tableRow
        [hidden]="tr.hidden"
        [class]="makeRowClass(k)"
        [class.hover-row]="tableRow.hover"
        [class.el-table__row--striped]="stripe && k % 2 === 1"
        [style]="makeRowStyle()"
        (click)="clickHandle()" (doubleClick)="doubleClickHandle()"
        (mouseenter)="tableRow.hover = true" (mouseleave)="tableRow.hover = false">
        <td *ngFor="let td of tr; let i = index" [class]="'el-table_1_column_' + (i + 1)"
          [ngStyle]="{width: td.width ? td.width + 'px' : 'auto'}"
          (mouseenter)="cellMouseActionHandle(true)"
          (mouseleave)="cellMouseActionHandle(false)"
          (click)="slotClickHandle(k, td)">
          <div class="cell">
            <ng-container *ngIf="!isTemplateRef(td.value)">{{td.value}}</ng-container>
            <ng-container *ngIf="isTemplateRef(td.value)">
              <ng-template [ngTemplateOutlet]="td.value"></ng-template>
            </ng-container>
          </div>
        </td>
      </tr>
    </table>
  `,
})
export class ElTableBody implements OnChanges {
  
  @Input('model') model: TableColumnDataItem[][]
  @Input() width: number
  @Input() stripe: boolean = false
  @Input() layout: any
  @Input() highlight: any
  @Input('row-class-name') rowClassName: (userRow: any, index: number) => string
  @Input('row-style') rowStyle: any
  
  formatModel: any[] = []
  
  constructor(
    public tableFormat: ElTableFormat,
  ) {
  }
  
  isTemplateRef(content: any): boolean {
    return content && typeof content !== 'string'
  }
  
  makeRowStyle(): SafeStyle {
    // const styles = `width: ${this.layout.width}px`
    return ''
  }
  
  slotClickHandle(index: number, td: any): any {
    if (!this.isTemplateRef(td.value) || !td.slotClick) {
      return
    }
    const nextValue: any = td.slotClick(this.formatModel, index)
    if (!nextValue) return
    this.model.splice(index, 1)
    this.formatModel = this.tableFormat.formatRowData(this.model)
  }
  
  makeRowClass(index: number): string {
    const userRows = this.formatModel[index]
    const userClass: string = this.rowClassName ? this.rowClassName(userRows, index) : ''
    return 'el-table__row ' + userClass
  }
  
  doubleClickHandle(): void {
  
  }
  
  clickHandle(): void {
  
  }
  
  cellMouseActionHandle(isEnter: boolean): void {
  
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    this.formatModel = this.tableFormat.formatRowData(this.model)
  }
  
}
