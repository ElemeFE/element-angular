import { Component, Input } from '@angular/core'
import { TableColumn } from '../table.interface'

@Component({
  selector: 'el-table-header',
  template: `
    <table class="el-table__header"  cellspacing="0" cellpadding="0" border="0"
      [ngStyle]="{width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''}">
      <!--<colgroup>-->
        <!--<col name="" width=""/>-->
      <!--</colgroup>-->
      <thead>
      <tr>
        <th *ngFor="let th of model" class="el-table_1_column_1 is-leaf"
          [ngStyle]="{width: th.width ? th.width + 'px' : 'auto'}"
          colspan="1" rowspan="1">
          <div class="cell">
            {{th.label}}
          </div>
        <!--<div class="">-->
          <!--<span class="caret-wrapper">-->
        <!--&lt;!&ndash;<i class="sort-caret ascending"></i>&ndash;&gt;-->
            <!--&lt;!&ndash;<i class="sort-caret descending"></i>&ndash;&gt;-->
        <!--</span>-->
          <!--<span class="el-table__column-filter-trigger">-->
            <!--<i class=""></i>-->
          <!--</span>-->
        <!--</div>-->
        </th>
      </tr>
      </thead>
    </table>
  `,
})
export class ElTableHeader {
  
  @Input() model: any[] = []
  @Input() layout: any
  @Input() border: boolean = false
  @Input('default-sort') defaultSort: any
  
  
  constructor() {
  }
  
  
}
