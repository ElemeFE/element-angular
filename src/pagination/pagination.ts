import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { ElPaginationProps } from './pagination.props'

@Component({
  selector: 'el-pagination',
  template: `
    <div class="el-pagination"
      [class.el-pagination--small]="small"
      style="display: inline-table;">
      <span class="el-pagination__total" *ngIf="showTotal">共 {{total}} 条</span>
      <el-pagination-size *ngIf="showSize"
        [model]="pageSize" [sizes]="pageSizes"
        (modelChange)="updatePageSize($event)">
      </el-pagination-size>
      
      <el-pagination-btn dir="left" (next)="nextHandle($event)"
        *ngIf="showPrev"
        [disabled]="model <= 1">
      </el-pagination-btn>
      <el-pagination-pager [current]="model" [count]="pageCount"
        *ngIf="showPager"
        (next)="nextHandle($event)">
      </el-pagination-pager>
      <el-pagination-btn dir="right" (next)="nextHandle($event)"
        *ngIf="showNext"
        [disabled]="model === pageCount">
      </el-pagination-btn>

      <el-pagination-jump *ngIf="showJumper"
        [model]="model" [max]="pageCount"
        (next)="nextHandle($event)">
      </el-pagination-jump>
    </div>
  `,
})
export class ElPagination extends ElPaginationProps implements OnInit, OnChanges {
  
  showPager: boolean = true
  showPrev: boolean = true
  showNext: boolean = true
  showTotal: boolean = true
  showSize: boolean = true
  showJumper: boolean = true
  
  static showLayout(ElName: string, layout: string[]): boolean {
    const member: string = layout.find(name => name === ElName)
    return !!member
  }
  
  constructor() {
    super()
  }
  
  nextHandle(step: number): void {
    const nextPage: number = this.model + step
    this.model = nextPage < 1 ? 1 : nextPage > this.total ? this.total : nextPage
    this.modelChange.emit(this.model)
  }
  
  updatePageSize(nextPageSize: number): void {
    this.pageCount = Math.ceil(this.total / nextPageSize)
    this.model = 1
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) return
    if (changes.total && changes.total.isFirstChange()) return
    this.updateLayout()
  }
  
  ngOnInit(): void {
    if (!this.pageCount && this.total === undefined) {
      return console.warn('el-pagination required [total]')
    }
    this.updateLayout()
  }
  
  private updateLayout(): void {
    if (this.total === undefined || this.total === null) {
      this.total = Math.round(this.pageCount * this.pageSize)
    }
    this.pageCount = Math.ceil(this.total / this.pageSize) || 1
    this.showPager = ElPagination.showLayout('pager', this.layout)
    this.showPrev = ElPagination.showLayout('prev', this.layout)
    this.showNext = ElPagination.showLayout('next', this.layout)
    this.showTotal = ElPagination.showLayout('total', this.layout)
    this.showSize = ElPagination.showLayout('size', this.layout)
    this.showJumper = ElPagination.showLayout('jumper', this.layout)
  }
  
}
