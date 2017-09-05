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
    const offset: number = currentDate.getMonth() - checkedDate.getMonth()
    return (offset > 1 || offset < -1) ? null : offset
  }
  
  static moment(input: any, format: string): string {
    const d: Date = new Date(input)
    if (String(d) === 'Invalid Date') return ''
    const makeReg: Function = (value: number | string): RegExp => new RegExp(`(${value})`)
    const keys: string[] = ['M+', 'd+', 'h+', 'm+', 's+', 'q+', 'S']
    const values: number[] = [
      d.getMonth() + 1,
      d.getDate(),
      d.getHours(),
      d.getMinutes(),
      d.getSeconds(),
      Math.floor((d.getMonth() + 3) / 3),
      d.getMilliseconds(),
    ]
    
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    
    let len = 0, key: string, val: number
    while (len < keys.length) {
      key = keys[len]
      val = values[len]
      if (makeReg(key).test(format)) {
        format = (<any>format).replace(RegExp.$1, (RegExp.$1.length === 1) ? val : ('00' + val).substr(('' + val).length))
      }
      len ++
    }
    return format
  }
  
  
  constructor() {
  
  }
  
  getTime(input?: any): number {
    const date: Date = new Date(input)
    if (String(date) === 'Invalid Date') {
      return 0
    }
    return date.getTime()
  }
  
}
