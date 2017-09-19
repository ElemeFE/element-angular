import { Component, Input } from '@angular/core'

@Component({
  selector: 'el-table-header',
  template: `
    <table class="el-table__header"  cellspacing="0" cellpadding="0" border="0"
      [ngStyle]="{ width: layout.bodyWidth | cssValue }">
      <thead>
      <tr>
        <th *ngFor="let th of model" [class]="makeClasses()"
          [ngStyle]="{ width: th.width | cssValue }"
          colspan="1" rowspan="1">
          <div class="cell">{{th.label}}</div>
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
  @Input() height: string | number
  
  makeClasses(): string {
    return this.height === 'auto' ? 'el-table_1_column_1 is-leaf' : 'gutter'
  }
  
}
