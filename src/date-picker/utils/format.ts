import { Injectable } from '@angular/core'

@Injectable()
export class DateFormat {
  
  static checkedDate(date: number | Date): Date {
    return typeof date === 'number' ? new Date(date) : date
  }
  
  static getDayCountOfMonth(year: number, month: number): number {
    const isLeapYear: boolean = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
    return [
      month === 1 && !isLeapYear,
      month === 1 && isLeapYear,
      !!([3, 5, 8, 10].find(num => num === month)),
      true,
    ].reduce((pre, next, index) => pre ? pre : (next ? 28 + index : 0), 0)
  }
  
  static getFirstDayOfMonth(date: number | Date): number {
    const checkedDate: Date = DateFormat.checkedDate(date)
    checkedDate.setDate(1)
    return checkedDate.getDay()
  }
  
  static getCurrentMonthOffset(targetDate: number | Date): number | null {
    const checkedDate: Date = DateFormat.checkedDate(targetDate)
    const currentDate = new Date()
    if (currentDate.getFullYear() !== checkedDate.getFullYear()) {
      return null
    }
    const offset: number = checkedDate.getMonth() - currentDate.getMonth()
    return (offset > 1 || offset < -1) ? null : offset
  }
  
  constructor() {
  
  }
  
  getDay(): void {
  
  }
}
