import { Component, ElementRef, Input, OnInit } from '@angular/core'
import { ElTable } from '../table'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { TableColumnDataItem } from '../table.interface'

@Component({
  selector: 'el-table-body',
  template: `
    <table class="el-table__body" [ngStyle]="{width: width + 'px'}"
      cellspacing="0" cellpadding="0" border="0">
      <tr *ngFor="let tr of model"
        [class]="makeRowClass()" [style]="makeRowStyle()"
        (click)="clickHandle()" (doubleClick)="doubleClickHandle()"
        (mouseenter)="mouseActionHandle(true)" (mouseleave)="mouseActionHandle(false)">
        <td *ngFor="let td of tr; let i = index" [class]="'el-table_1_column_' + (i + 1)"
          [ngStyle]="{width: td.width ? td.width + 'px' : 'auto'}"
          (mouseenter)="cellMouseActionHandle(true)"
          (mouseleave)="cellMouseActionHandle(false)">
          <div class="cell">{{td.value}}</div>
        </td>
      </tr>
    </table>
  `,
})
export class ElTableBody implements OnInit {
  
  @Input('model') model: TableColumnDataItem[][]
  @Input() width: number
  @Input() stripe: any
  @Input() layout: any
  @Input() highlight: any
  @Input('row-class-name') rowClassName: any
  @Input('row-style') rowStyle: any
  
  
  constructor(
    private root: ElTable,
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {
  }
  
  makeRowStyle(): SafeStyle {
    // const styles = `width: ${this.layout.width}px`
    return ''
  }
  
  makeRowClass(): string {
    return 'el-table__row'
  }
  
  doubleClickHandle(): void {
  
  }
  
  clickHandle(): void {
  
  }
  
  mouseActionHandle(isEnter: boolean): void {
  
  }
  cellMouseActionHandle(isEnter: boolean): void {
  
  }
  
  ngOnInit(): void {
  }
  
}
