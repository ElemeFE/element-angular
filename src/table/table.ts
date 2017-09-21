import {
  Component, ElementRef, OnDestroy, OnInit, Renderer2,
  ViewChild,
} from '@angular/core'
import { DocumentWrapper, WindowWrapper } from '../shared/services'
import { ModelWithIndexDataItem, OrderMap, TableColumn, TableColumnDataItem, WidthItem } from './table.interface'
import { ElTableProps } from './table.props'
import { ElTableFormat } from './utils/format'

@Component({
  selector: 'el-table',
  template: `
    <div class="el-table" #tableRef
      [ngStyle]="{ height: height | cssValue }"
      [class.el-table--enable-row-transition]="true"
      [class.el-table--striped]="stripe"
      [class.el-table--border]="border"
      [class.el-table--hidden]="false">
      <div class="hidden-columns"><ng-content></ng-content></div>
      <div class="el-table__header-wrapper" [hidden]="!showHeader" #headerRef>
        <el-table-header [model]="columnsWithLevel" [layout]="layout" [columns-width]="columnsWidth"
          [border]="border" [height]="height">
        </el-table-header>
      </div>
      <div class="el-table__body-wrapper" [ngStyle]="{ height: layout.bodyHeight | cssValue }">
        <el-table-body [model]="columnsData" [stripe]="stripe"
          [layout]="layout" [row-class-name]="rowClassName"
          [ngStyle]="{ width: layout.bodyWidth + 'px' }">
        </el-table-body>
        <div [ngStyle]="{width: layout.bodyWidth + 'px'}" class="el-table__empty-block" *ngIf="!model || model.length === 0">
          <span class="el-table__empty-text">{{placeholder}}</span>
        </div>
      </div>
    </div>
  `,
})
export class ElTable extends ElTableProps implements OnInit, OnDestroy {
  
  @ViewChild('headerRef') headerRef: ElementRef
  
  columnsData: TableColumnDataItem[][]
  columnsWithLevel: any[] = []
  layout: any = {
    headerHeight: 40,
    bodyHeight: 'auto',
    bodyWidth: 'auto',
    scrollBarWidth: 0,
  }
  columnsWidth: WidthItem[] = []
  private columns: TableColumn[] = []
  private globalListenFunc: Function
  
  static generateID(): string {
    return Math.random().toString(16).substr(2, 8)
  }
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private document: DocumentWrapper,
    private window: WindowWrapper,
  ) {
    super()
  }
  
  updateColumns(column: TableColumn): void {
    const next: TableColumn = Object.assign(column, { index: this.columns.length })
    this.columns.push(next)
  }
  
  updateBodyHeight(): void {
    const height: number = ElTableFormat.getCSSValue(this.height)
    const header: HTMLElement = this.headerRef.nativeElement
    if (!header || !height) return
    
    const timer: any = setTimeout(() => {
      const headerHeight: number = header.offsetHeight
      if (headerHeight) {
        this.layout.headerHeight = headerHeight
        this.layout.bodyHeight = height - this.layout.headerHeight
        this.layout.scrollBarWidth = this.window.innerWidth - this.document.body.clientWidth
      }
      clearTimeout(timer)
    }, 0)
  }
  
  updateLayout(): void {
    const elTable: HTMLElement = this.el.nativeElement.children[0]
    this.layout.bodyWidth = elTable.clientWidth
  }
  
  updateColumnsWidth(widthItem: WidthItem): void {
    this.columnsWidth.push(widthItem)
  }
  
  computeColumnsWidth(columnsWidth: WidthItem[]): WidthItem[] {
    let auto: number = 0, count: number= 0
    columnsWidth.forEach((item: WidthItem) => {
      if (item.auto) {
        return auto ++
      }
      if (Number.isNaN(item.width)) {         // cannot parse values
        item.auto = true
        return auto ++
      }
      count += item.width
    })
    const average: number = (this.layout.bodyWidth - count) / auto
    return columnsWidth.map((item: WidthItem) =>
      item.auto ? Object.assign(item, { width: average }) : item)
  }
  
  transformColumnsData(): void {
    // order by deep
    this.columns = this.columns.map((column: TableColumn) => {
      if (!Array.isArray(this.columnsWithLevel[column.level])) {
        this.columnsWithLevel[column.level] = []
      }
      this.columnsWithLevel[column.level].push(column)
      if (column.deep === 0) return column
      return null
    }).filter(r => r)
    this.columnsWithLevel.reverse()
    this.columnsWidth = this.computeColumnsWidth(this.columnsWidth)
  
    // distribution template
    this.columns = this.columns.map((column: TableColumn) => {
      if (!column.slot) return column
      const modelKey: string = ElTable.generateID()
      this.model = this.model.map((v: any) => Object.assign(v, { [modelKey]: column.slot }))
      return Object.assign(column, { modelKey })
    })
    const orderMap: OrderMap = this.columns.reduce((pre, next: TableColumn) =>
      Object.assign(pre, { [next.modelKey]: next }), {})
    
    // add index, width, value
    const modelWithIndex: ModelWithIndexDataItem[][] =  this.model.map((row: any) =>
      Object.keys(row || {}).map((v: string | number) => ({
        value: row[v], [v]: row[v],
        index: orderMap[v].index,
        width: orderMap[v].width,
      })
    ))
    
    // column sort
    this.columnsData = modelWithIndex.map((row: TableColumnDataItem[]) =>
      row.sort((pre, next) => pre.index - next.index))
  
    this.updateBodyHeight()
  }
  
  ngOnInit(): void {
    this.updateLayout()
    this.updateBodyHeight()
    this.globalListenFunc = this.renderer.listen('window', 'resize', () => {
      this.updateLayout()
      this.columnsWidth = this.computeColumnsWidth(this.columnsWidth)
    })
  }
  
  ngOnDestroy(): void {
    this.globalListenFunc && this.globalListenFunc()
  }
  
}
