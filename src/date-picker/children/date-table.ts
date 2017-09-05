import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { DateFormat } from '../utils/format'
import { removeNgTag } from '../../shared/utils'

export type DateRowItem = {
  day: number,                  // day value
  monthOffset: number,          // current: 0, nextMonth: 1, lastMonth: -1
}
export type DateRow = DateRowItem[]

@Component({
  selector: 'el-date-table',
  providers: [DateFormat],
  styles: ['.hover { background-color: #E4E7EF }'],
  template: `
    <table class="el-date-table" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
        <th *ngFor="let week of weeks">{{week}}</th>
      </tr>
      <tr class="el-date-table__row"
          *ngFor="let row of tableRows">
        <td *ngFor="let item of row" #td
          (mouseenter)="item.monthOffset === 0 && (td.hover = true)"
          (mouseleave)="td.hover = false"
          [class.next-month]="item.monthOffset === 1"
          [class.prev-month]="item.monthOffset === -1"
          [class.normal]="item.monthOffset === 0"
          [class.today]="isToday(item)"
          [class.current]="isTargetDay(item)"
          [class.hover]="td.hover"
          (click)="clickHandle(item)">
          {{isToday(item) ? '今天' : item.day}}
        </td>
      </tr>
      </tbody>
    </table>
  `,
})
export class ElDateTable implements OnInit {
  
  @Input() time: number
  @Input('disabled-date') disabledDate: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  private weeks: string[] = ['日', '一', '二', '三', '四', '五', '六']
  private tableRows: DateRow[] = [ [], [], [], [], [], [] ]
  private targetDay: number
  private today: number
  private currentMonthOffset: number
  
  static BuildMonthStartRow: Function = (first: number, lastCount: number): DateRowItem[] => {
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
  
  constructor(
    private el: ElementRef,
  ) {
  }
  
  isToday(item: DateRowItem): boolean {
    if (this.currentMonthOffset === null) return false
    return item.monthOffset === this.currentMonthOffset && this.today === item.day
  }
  
  isTargetDay(item: DateRowItem): boolean {
    return item.monthOffset === 0 && item.day === this.targetDay
  }
  
  clickHandle(item: DateRowItem): void {
    const date = new Date(this.time)
    const currentMonth = date.getMonth()
    const targetMonth = currentMonth + item.monthOffset
    date.setMonth(targetMonth)
    date.setDate(item.day)
    this.modelChange.emit(date.getTime())
  }
  
  getRows(): void {
    const date = new Date(this.time)
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
    this.getRows()
    removeNgTag(this.el.nativeElement)
  }
  
}
