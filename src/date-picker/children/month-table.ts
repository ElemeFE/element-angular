import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'
import { ElLocalesService } from '../../locales';

@Component({
  selector: 'el-month-table',
  template: `
    <table class="el-month-table">
      <tbody>
      <tr *ngFor="let row of monthRows; let i = index;">
        <td class="available"
            *ngFor="let item of row; let k = index;"
            [class.current]="isCurrentMonth(i, k)"
            (click)="clickHandle(i, k)">
          <a class="cell">{{ item }}</a>
        </td>
      </tr>
      </tbody>
    </table>
  `,
})
export class EMonthTable implements OnInit, OnChanges {
  
  @Input() showWeekNumber: boolean = false
  @Input() model: number
  @Input('disabled-date') disabledDate: any
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>()
  
  currentMonth: number
  date: Date
  
  monthRows: any[] = [
    ['一月', '二月', '三月', '四月'],
    ['五月', '六月', '七月', '八月'],
    ['九月', '十月', '十一月', '十二月'],
  ]
    
  constructor(
    private elLocales: ElLocalesService
  ) {
  }
  
  clickHandle(i: number, k: number): void {
    const monthID = 4 * i + k
    this.currentMonth = monthID
    this.date.setMonth(monthID)
    this.modelChange.emit(this.date.getTime())
  }
  isCurrentMonth(i: number, k: number): boolean {
    return this.currentMonth === 4 * i + k
  }
  
  ngOnInit(): void {
    this.elLocales.resources$.subscribe(locales => {
      const months = locales.el.datepicker.months;
      this.monthRows = [
        [ months.jan, months.feb, months.mar, months.apr ],
        [ months.may, months.jun, months.jul, months.aug ],
        [ months.sep, months.oct, months.nov, months.dec ]
      ]
    })

    this.date = new Date(this.model)
    this.currentMonth = this.date.getMonth()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    // first change
    if (changes.model.isFirstChange()) return
  
    this.model = changes.model.currentValue
    this.date = new Date(this.model)
    this.currentMonth = this.date.getMonth()
  }
}
