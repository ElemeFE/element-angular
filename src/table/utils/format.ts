import { Injectable } from '@angular/core'
import { TableColumnDataItem } from '../table.interface'

@Injectable()
export class ElTableFormat {
  
  static getCSSValue(val: string | number): number {
    if (val === 'auto') return null
    if (!Number.isNaN(+val)) return +val
    if (String(val).endsWith('px')) {
      return +String(val).split('px')[0]
    }
  }
  
  formatRowData(tableRows: TableColumnDataItem[][]): any {
    const elTableKeys: string[] = ['value', 'width', 'index']
    const tableRowsMap: any = tableRows.map((row, index) => {
      const currentRow: any = {}
      row.forEach((item: TableColumnDataItem) =>
        Object.keys(item).forEach((r: any) => {
          if (elTableKeys.indexOf(r) < 0) {
            currentRow[r] = item[r]
          }
      }))
      currentRow['index'] = index
      return currentRow
    })
    return tableRowsMap
  }
  
}
