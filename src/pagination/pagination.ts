import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { ElPaginationProps } from './pagination.props'

@Component({
  selector: 'el-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="el-pagination">
      <el-pagination-btn dir="left" (next)="nextHandle($event)"></el-pagination-btn>
      <el-pagination-pager [current]="1"
        [count]="pageCount">
      </el-pagination-pager>
      <el-pagination-btn dir="right" (next)="nextHandle($event)"></el-pagination-btn>
    </div>
  `,
})
export class ElPagination extends ElPaginationProps implements OnInit {
  
  constructor(
  ) {
    super()
  }
  
  listClickHandle(): void {
  
  }
  
  nextHandle(step: number): void {
  
  }
  
  ngOnInit(): void {
    if (!this.pageCount) {
      this.pageCount = this.total / this.pageSize
    }
  }

}
