import {
  Component, ElementRef, OnDestroy, OnInit, Renderer2,
  ViewChild,
} from '@angular/core'
import { DocumentWrapper, WindowWrapper } from '../shared/services'
import { TableColumn, TableColumnDataItem } from './table.interface'
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
        <el-table-header [model]="columnsWithLevel" [layout]="layout" [width-group]="widthGroup"
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
  widthGroup: any[] = []
  layout: any = {
    headerHeight: 40,
    bodyHeight: 'auto',
    bodyWidth: 'auto',
    scrollBarWidth: 0,
  }
  // order by deep
  columnsWithLevel: TableColumn[][] = []
  columnsWithDeep: TableColumn[][] = []
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
  
  updateColumns(columns: TableColumn): void {
    this.columns.push(columns)
  }
  
  updateWidthGroup(columnsWithLevel: TableColumn[][]): void {
    const widthGroup: any = []
    columnsWithLevel.forEach((columns: TableColumn[]) => {
      columns.forEach((column: TableColumn) => {
        if (widthGroup.indexOf(column.width) > -1) return
        widthGroup.push({
          width: column.width,
          id: ElTable.generateID(),
        })
      })
    })
    this.widthGroup = widthGroup
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
  
  improveTableWidth(columnsWithLevel: TableColumn[][]): TableColumn[][] {
    let widthWithDeep: any = []
    columnsWithLevel.forEach((columns: TableColumn[]) => {
      columns.forEach((column: TableColumn) => {
        if (!widthWithDeep[column.deep]) {
          widthWithDeep[column.deep] = { total: 0 , count: 0, pass: 0 }
        }
        if (!Number.isNaN(+column.width)) {
          widthWithDeep[column.deep].total += column.width
          widthWithDeep[column.deep].pass ++
        }
        widthWithDeep[column.deep].count ++
      })
    })
    widthWithDeep = widthWithDeep.map((value: any) => {
      const average: number = (this.layout.bodyWidth - value.total) / (value.count - value.pass)
      return { average }
    })
    
    return columnsWithLevel.map((columns: TableColumn[]) => {
      return columns.map((column: TableColumn) => {
        if (Number.isNaN(+column.width)) {
          return Object.assign(column, { width: widthWithDeep[column.deep].average })
        }
        return column
      })
    })
  }
  
  transformColumnsData(): void {
    type OrderMap = {
      [key: string]: any,
    }
    type ModelWithIndexDataItem = OrderMap & {
      value: string | number,
      index: number,
    }
    // order by deep
    // body show deep 0, header show level array
    this.columns = this.columns.map((column: TableColumn) => {
      if (!Array.isArray(this.columnsWithLevel[column.level])) {
        this.columnsWithLevel[column.level] = []
      }
      this.columnsWithLevel[column.level].push(column)
      if (column.deep === 0) return column
      return null
    }).filter(r => r)
    this.columnsWithLevel.reverse()
    this.columnsWithLevel = this.improveTableWidth(this.columnsWithLevel)
    this.updateWidthGroup(this.columnsWithLevel)
  
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
      this.updateWidthGroup(this.columnsWithLevel)
    })
  }
  
  ngOnDestroy(): void {
    this.globalListenFunc && this.globalListenFunc()
  }
  
}
