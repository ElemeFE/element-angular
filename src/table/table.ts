import {
  AfterContentInit,
  AfterViewInit, Component, ComponentRef, ContentChild, ElementRef, OnDestroy, OnInit, Renderer2,
  ViewChild,
} from '@angular/core'
import { TableColumn, TableColumnDataItem } from './table.interface'
import { ElTableProps } from './table.props'
import { ElTableFormat } from './utils/format'

@Component({
  selector: 'el-table',
  template: `
    <div class="el-table"
      [ngStyle]="{ height: height | cssValue }"
      [class.el-table--enable-row-transition]="true"
      [class.el-table--fit]="fit" [class.el-table--striped]="stripe"
      [class.el-table--border]="border" [class.el-table--hidden]="false"
      [class.el-table--fluid-height]="maxHeight" [class.el-table--enable-row-hover]="isComplex">
      <div class="hidden-columns"><ng-content></ng-content></div>
      <div class="el-table__header-wrapper" [hidden]="!showHeader" #headerRef>
        <el-table-header [model]="columns" [layout]="layout"
          [border]="border" [height]="height" [default-sort]="defaultSort">
        </el-table-header>
      </div>
      <div class="el-table__body-wrapper" [ngStyle]="{ height: layout.bodyHeight | cssValue }">
        <el-table-body [model]="columnsData" [stripe]="stripe"
          [layout]="layout" [row-class-name]="rowClassName" [row-style]="rowStyle"
          [highlight]="highlightCurrentRow" [ngStyle]="{ width: layout.bodyWidth + 'px' }">
        </el-table-body>
        <div [ngStyle]="{width: layout.bodyWidth + 'px'}" class="el-table__empty-block" *ngIf="!model || model.length === 0">
          <span class="el-table__empty-text">{{placeholder}}</span>
        </div>
      </div>
      <!--<div class="el-table__footer-wrapper"*ngIf="showSummary" *ngIf="data && data.length > 0">-->
        <!--<table-footer [model]="model"  [ngStyle]="{ width: layout.bodyWidth ? layout.bodyWidth + 'px' : '' }"-->
          <!--[sum-text]="sumText || t('el.table.sumText')" [summary-method]="summaryMethod"-->
          <!--[default-sort]="defaultSort" [layout]="layout" [border]="border">-->
        <!--</table-footer>-->
      <!--</div>-->
      <!--<div class="el-table__fixed" *ngIf="fixedColumns.length > 0"-->
        <!--[ngStyle]="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }"-->
        <!--[style]="fixedHeight">-->
        <!--<div class="el-table__fixed-header-wrapper" *ngIf="showHeader">-->
          <!--<table-header [model]="model" fixed="left" [border]="border" [layout]="layout"-->
            <!--[ngStyle]="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }"></table-header>-->
        <!--</div>-->
        <!--<div class="el-table__fixed-body-wrapper" [style]="fixedBodyHeight"-->
          <!--[ngStyle]="{ top: layout.headerHeight + 'px' }">-->
          <!--<table-body [model]="model" fixed="left" [stripe]="stripe"-->
            <!--[layout]="layout" [highlight]="highlightCurrentRow"-->
            <!--[row-class-name]="rowClassName" [row-style]="rowStyle"-->
            <!--[ngStyle]="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }">-->
          <!--</table-body>-->
        <!--</div>-->
        <!--<div class="el-table__fixed-footer-wrapper"*ngIf="showSummary && data && data.length > 0">-->
          <!--<table-footer [model]="model" fixed="left" [border]="border"-->
            <!--[sum-text]="sumText" [summary-method]="summaryMethod" [layout]="layout"-->
            <!--[ngStyle]="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }"></table-footer>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="el-table__fixed-right" *ngIf="rightFixedColumns.length > 0"-->
        <!--[ngStyle]="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '',-->
          <!--right: layout.scrollY ? (border ? layout.gutterWidth : (layout.gutterWidth || 1)) + 'px' : ''}"-->
        <!--[style]="fixedHeight">-->
        <!--<div class="el-table__fixed-header-wrapper" *ngIf="showHeader">-->
          <!--<table-header [model]="model" fixed="right" [border]="border" [layout]="layout"-->
            <!--[ngStyle]="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }"></table-header>-->
        <!--</div>-->
        <!--<div class="el-table__fixed-body-wrapper" [style]="fixedBodyHeight"-->
          <!--[ngStyle]="{ top: layout.headerHeight + 'px' }">-->
          <!--<table-body [model]="model" fixed="right" [stripe]="stripe"-->
            <!--[layout]="layout" [row-class-name]="rowClassName"-->
            <!--[row-style]="rowStyle" [highlight]="highlightCurrentRow"-->
            <!--[ngStyle]="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }">-->
          <!--</table-body>-->
        <!--</div>-->
        <!--<div class="el-table__fixed-footer-wrapper" *ngIf="showSummary data && data.length > 0">-->
          <!--<table-footer [model]="model" fixed="right" [border]="border"-->
            <!--[sum-text]="sumText" [summary-method]="summaryMethod" [layout]="layout"-->
            <!--[ngStyle]="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }"></table-footer>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="el-table__fixed-right-patch" *ngIf="rightFixedColumns.length > 0"-->
        <!--[ngStyle]="{ width: layout.scrollY ? layout.gutterWidth + 'px' : '0', height: layout.headerHeight + 'px' }"></div>-->
      <!--<div class="el-table__column-resize-proxy" *ngIf="resizeProxyVisible"></div>-->
    </div>
  `,
})
export class ElTable extends ElTableProps implements OnInit, OnDestroy {
  
  @ViewChild('headerRef') headerRef: ElementRef
  
  columns: TableColumn[] = []
  columnsData: TableColumnDataItem[][]
  layout: any = { headerHeight: 40, bodyHeight: 'auto', bodyWidth: 'auto' }
  private globalListenFunc: Function
  
  static generateID(): string {
    return Math.random().toString(16).substr(2, 8)
  }
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    super()
  }
  
  updateColumns(columns: TableColumn): void {
    this.columns.push(columns)
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
      }
      clearTimeout(timer)
    }, 0)
  }
  
  updateLayout(): void {
    const elTable: HTMLElement = this.el.nativeElement.children[0]
    this.layout.bodyWidth = elTable.clientWidth
  }
  
  transformColumnsData(): void {
    type OrderMap = {
      [key: string]: any,
    }
    type ModelWithIndexDataItem = OrderMap & {
      value: string | number,
      index: number,
    }
    // distribution template
    this.columns = this.columns.map((column: TableColumn, index: number) => {
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
        slotClick: orderMap[v].slotClick,
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
    })
  }
  
  ngOnDestroy(): void {
    this.globalListenFunc && this.globalListenFunc()
  }
  
}
