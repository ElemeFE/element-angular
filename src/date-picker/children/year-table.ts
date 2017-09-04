import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'el-year-table',
  template: `
    <table class="el-year-table" (click)="handleYearTableClick()">
      <tbody>
      <tr>
        <td class="available" [class]="getCellStyle(startYear + 0)">
          <a class="cell">{{ startYear }}</a>
        </td>
        <td class="available" [class]="getCellStyle(startYear + 1)">
          <a class="cell">{{ startYear + 1 }}</a>
        </td>
        <td class="available" [class]="getCellStyle(startYear + 2)">
          <a class="cell">{{ startYear + 2 }}</a>
        </td>
        <td class="available" [class]="getCellStyle(startYear + 3)">
          <a class="cell">{{ startYear + 3 }}</a>
        </td>
      </tr>
      <tr>
        <td class="available" [class]="getCellStyle(startYear + 4)">
          <a class="cell">{{ startYear + 4 }}</a>
        </td>
        <td class="available" [class]="getCellStyle(startYear + 5)">
          <a class="cell">{{ startYear + 5 }}</a>
        </td>
        <td class="available" [class]="getCellStyle(startYear + 6)">
          <a class="cell">{{ startYear + 6 }}</a>
        </td>
        <td class="available" [class]="getCellStyle(startYear + 7)">
          <a class="cell">{{ startYear + 7 }}</a>
        </td>
      </tr>
      <tr>
        <td class="available" [class]="getCellStyle(startYear + 8)">
          <a class="cell">{{ startYear + 8 }}</a>
        </td>
        <td class="available" [class]="getCellStyle(startYear + 9)">
          <a class="cell">{{ startYear + 9 }}</a>
        </td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
  `,
})
export class ElYearTable {
  
  @Input() showWeekNumber: boolean = false
  @Input() time: Date
  @Input('disabled-date') disabledDate: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  private startYear: any
  
  constructor(
  
  ) {
  }
  
  getCellClasses(cell: any): string {
    return ''
  }
  
  handleYearTableClick(): void {
  
  }
  
  getCellStyle(): void {
  
  }
}
