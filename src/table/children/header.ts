import { Component, Input } from '@angular/core'
import { WidthItem } from '../table.interface'

@Component({
  selector: 'el-table-header',
  template: `
    <ng-template #widthTmp>
      <col *ngFor="let item of columnsWidth" [width]="item.width">
    </ng-template>
    <table class="el-table__header" cellspacing="0" cellpadding="0" border="0"
      [ngStyle]="{ width: '100%' }">
      <ng-template [ngTemplateOutlet]="widthTmp">
      </ng-template>

      <tr *ngFor="let tr of model">
        <th *ngFor="let th of tr" [class]="makeClasses(th)"
            [ngStyle]="{ width: th.width | cssValue }"
            [attr.colspan]="getColspan(th)" [attr.rowspan]="getRowspan(th)">
          <div class="cell" [ngStyle]="{ width: th.width | cssValue }">{{th.label}}</div>
        </th>
      </tr>
    </table>
  `,
})
export class ElTableHeader {
  
  @Input() model: any[] = []
  @Input() layout: any
  @Input() border: boolean = false
  @Input() height: string | number
  @Input('columns-width') columnsWidth: WidthItem[] = []
  
  makeClasses(th: any): string {
    const isLeaf: string = this.getColspan(th) > 1 ? '' : 'is-leaf'
    return this.height === 'auto' ? `${isLeaf} ` : ' gutter'
  }
  
  getRowspan(td: any): number {
    if (td.deep === 0 && td.level !== 0) {
      return td.level + 1
    }
    return 1
  }
  
  getColspan(th: any): number {
    return th.childCount > 0 ? th.childCount : 1
  }
  
}
