import { Component, Input } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'el-table-header',
  template: `
    <table class="el-table__header"  cellspacing="0" cellpadding="0" border="0"
      [ngStyle]="{width: layout.bodyWidth ? layout.bodyWidth + 'px' : ''}">
      <thead>
      <tr>
        <th *ngFor="let th of model" [class]="makeClasses()"
          [style]="makeStyles(th)"
          colspan="1" rowspan="1">
          <div class="cell">
            {{th.label}}
          </div>
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
  @Input('default-sort') defaultSort: any
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  makeClasses(): string {
    return this.height === 'auto' ? 'el-table_1_column_1 is-leaf' : 'gutter'
  }
  
  makeStyles(th: any): SafeStyle {
    const styles: string = this.height === 'auto'
      ? `width: ${th.width ? th.width : 'auto'}`
      : `width: 100%`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
}
