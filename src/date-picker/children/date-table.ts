import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core'
import { DateFormat } from '../utils/format'

export type DateRowItem = {
  day: number,                  // day value
  monthOffset: number,          // current: 0, nextMonth: 1, lastMonth: -1
}
export type DateRow = DateRowItem[]

@Component({
  selector: 'el-date-table',
  providers: [DateFormat],
  template: `
    <table class="el-date-table" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
        <th *ngFor="let week of weeks">{{week}}</th>
      </tr>
      <tr class="el-date-table__row"
          *ngFor="let row of tableRows">
        <td *ngFor="let item of row"
          [class.available]="item.monthOffset === 0"
          [class.next-month]="item.monthOffset === 1"
          [class.prev-month]="item.monthOffset === -1"
          [class.normal]="item.monthOffset === 0"
          [class.today]="isToday(item)"
          [class.current]="isTargetDay(item)"
          (click)="clickHandle(item)">
          <div>
            <span>{{item.day}}</span>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  `,
})
export class ElDateTable implements OnInit, OnChanges {
  
  @Input() model: number
  @Input('disabled-date') disabledDate: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  weeks: string[] = ['日', '一', '二', '三', '四', '五', '六']
  tableRows: DateRow[] = [ [], [], [], [], [], [] ]
  targetDay: number
  targetMonthOffset: number = 0               // default: current month, offset = 0
  date: Date
  today: number
  currentMonthOffset: number
  
  static BuildMonthStartRow(first: number, lastCount: number): DateRowItem[] {
    let lastday: number = 7 - first
    // first loop
    lastCount ++
    lastday ++
    return [0, 1, 2, 3, 4, 5, 6].map(() => {
      lastday --
      if (lastday > 0) return { day: lastday, monthOffset: 0 }
      lastCount --
      return { day: lastCount, monthOffset: -1 }
    }).reverse()
  }
  
  isToday(item: DateRowItem): boolean {
    if (this.currentMonthOffset === null) return false
    return item.monthOffset === this.currentMonthOffset && this.today === item.day
  }
  
  isTargetDay(item: DateRowItem): boolean {
    return item.monthOffset === this.targetMonthOffset && item.day === this.targetDay
  }
  
  clickHandle(item: DateRowItem): void {
    const date = this.date
    const currentMonth = date.getMonth()
    const targetMonth = currentMonth + item.monthOffset
    // update target and update view
    this.targetDay = item.day
    this.targetMonthOffset = item.monthOffset
    
    // get time and emit a number
    date.setMonth(targetMonth)
    date.setDate(item.day)
    this.modelChange.emit(date.getTime())
  }
  
  getRows(): void {
    const date = this.date
    this.targetDay = date.getDate()
    this.today = new Date().getDate()
    this.currentMonthOffset = DateFormat.getCurrentMonthOffset(date)
  
    const lastMonth: number = date.getMonth() - 1
    const lastYear: number = lastMonth < 0 ? date.getFullYear() - 1 : date.getFullYear()
    const currentMonthdayCount: number = DateFormat.getDayCountOfMonth(date.getFullYear(), date.getMonth())
    const lastMonthDayCount: number = DateFormat.getDayCountOfMonth(lastYear, lastMonth < 0 ? 12 : lastMonth)
    const firstDay: number = DateFormat.getFirstDayOfMonth(date)
    
    let nextMonthDay: number = 0
    this.tableRows = this.tableRows.map((row, index) => {
      if (index === 0) {
        return ElDateTable.BuildMonthStartRow(firstDay, lastMonthDayCount)
      }
      const thisWeekFirstDay = 7 - firstDay + 7 * (index - 1)
      return new Array(7).fill(0).map((v, i) => {
        const start = thisWeekFirstDay + i + 1
        if (start <= currentMonthdayCount) return { day: start, monthOffset: 0 }
        nextMonthDay ++
        return { day: nextMonthDay, monthOffset: 1 }
      })
    })
  }
  
  ngOnInit(): void {
    this.date = new Date(this.model)
    this.getRows()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    // first change
    if (changes.model.isFirstChange()) return
    
    this.model = changes.model.currentValue
    this.date = new Date(this.model)
    this.getRows()
  }
  
}
