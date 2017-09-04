import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'el-month-table',
  template: `
    <table class="el-month-table" (click)="handleMonthTableClick()">
      <tbody>
      <tr>
        <td [class]="getCellStyle(0)">
          <a class="cell">123123123</a>
        </td>
        <td [class]="getCellStyle(1)">
          <a class="cell">123123123</a>
        </td>
        <td [class]="getCellStyle(2)">
          <a class="cell">123123123</a>
        </td>
        <td [class]="getCellStyle(3)">
          <a class="cell">123123123</a>
        </td>
      </tr>
      <tr>
        <td [class]="getCellStyle(4)">
          <a class="cell">123123123</a>
        </td>
        <td [class]="getCellStyle(5)">
          <a class="cell">123123123</a>
        </td>
        <td [class]="getCellStyle(6)">
          <a class="cell">123123123</a>
        </td>
        <td [class]="getCellStyle(7)">
          <a class="cell">123123123</a>
        </td>
      </tr>
      <tr>
        <td [class]="getCellStyle(8)">
          <a class="cell">123123123</a>
        </td>
        <td [class]="getCellStyle(9)">
          <a class="cell">123123123</a>
        </td>
        <td [class]="getCellStyle(10)">
          <a class="cell">123123123</a>
        </td>
        <td [class]="getCellStyle(11)">
          <a class="cell">123123123</a>
        </td>
      </tr>
      </tbody>
    </table>
  `,
})
export class EMonthTable {
  
  @Input() showWeekNumber: boolean = false
  @Input() time: Date
  @Input('disabled-date') disabledDate: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  constructor(
  
  ) {
  }
  
  getCellClasses(cell: any): string {
    return ''
  }
  
  handleClick(): void {
  
  }
  
  handleMonthTableClick(): void {
  
  }
}
