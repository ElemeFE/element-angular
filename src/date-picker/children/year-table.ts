import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'

@Component({
  selector: 'el-year-table',
  template: `
    <table class="el-year-table">
      <tbody>
      <tr *ngFor="let years of yearRows">
        <td class="available" *ngFor="let year of years"
          [class.current]="year === currentYear"
          (click)="clickHandle(year)">
          <a class="cell">{{year}}</a>
        </td>
      </tr>
      </tbody>
    </table>
  `,
})
export class ElYearTable implements OnInit, OnChanges {
  
  @Input() showWeekNumber: boolean = false
  @Input() model: number
  @Input('disabled-date') disabledDate: any
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>()
  
  date: Date
  yearRows: number[][]
  currentYear: number
  
  clickHandle(year: number): void {
    this.currentYear = year
    this.date.setFullYear(year)
    this.modelChange.emit(this.date.getTime())
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
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    // first change
    if (changes.model.isFirstChange()) return
  
    this.model = changes.model.currentValue
    this.date = new Date(this.model)
    this.currentYear = this.date.getFullYear()
    this.yearRows = this.updateYearRow(this.currentYear)
  }
  
}
