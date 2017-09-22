import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'cssValue' })
export class ElCSSValuePipe implements PipeTransform {
  
  transform(value: string | number): string {
    if (typeof value === 'number') return `${value}px`
    if (Number.isNaN(+value)) return String(value)
    return `${value}px`
  }
  
}
