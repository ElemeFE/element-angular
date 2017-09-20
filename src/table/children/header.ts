import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'

@Component({
  selector: 'el-table-header',
  template: `
    <table class="el-table__header" cellspacing="0" cellpadding="0" border="0"
           [ngStyle]="{ width: layout.bodyWidth | cssValue }">
      <colgroup>
        <col *ngFor="let item of widthGroup"
          [attr.name]="item.id" [width]="item.width">
        <col name="gutter" width="">
      </colgroup>
      <thead>
      <tr *ngFor="let tr of model">
        <th *ngFor="let th of tr" [class]="makeClasses(th)"
            [ngStyle]="{ width: th.width | cssValue }"
            [attr.colspan]="getColspan(th)" [attr.rowspan]="getRowspan(th)">
          <div class="cell">{{th.label}}</div>
        </th>
        <th class="gutter" style="width: 0px;"></th>
      </tr>
      </thead>
    </table>
  `,
})
export class ElTableHeader implements OnChanges {
  
  @Input() model: any[] = []
  @Input('width-group') widthGroup: any[] = []
  @Input() layout: any
  @Input() border: boolean = false
  @Input() height: string | number
  
  makeClasses(th: any): string {
    const isLeaf: string = this.getColspan(th) > 1 ? '' : 'is-leaf'
    const id: string = this.getWidthID(th.width)
    return this.height === 'auto' ? `${id} ${isLeaf} ` : ' gutter'
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
  
  getWidthID(width: string): string {
    const result: any = this.widthGroup.find(item => item.width === width)
    return result.id
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    
  }
  
}
