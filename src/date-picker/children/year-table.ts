import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'el-year-table',
  template: `
    <table class="el-year-table" (click)="handleYearTableClick()">
      <tbody>
      <tr *ngFor="let years of yearRows">
        <td class="available" *ngFor="let year of years">
          <a class="cell">{{year}}</a>
        </td>
      </tr>
      </tbody>
    </table>
  `,
})
export class ElYearTable implements OnInit {
  
  @Input() showWeekNumber: boolean = false
  @Input() model: number
  @Input('disabled-date') disabledDate: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  private date: Date
  private yearRows: number[][]
  private currentYear: number
  
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
  
  updateYearRow(currentYear: number): number[][] {
    const startYear: number = ~~(currentYear / 10) * 10
    return [ [], [], [] ].map((v, index) =>
      [0, 1, 2, 3].map(num => startYear + (index * 4) + num))
  }
  
  ngOnInit(): void {
    this.date = new Date(this.model)
    this.currentYear = this.date.getFullYear()
    this.yearRows = this.updateYearRow(this.currentYear)
  }
  
}
