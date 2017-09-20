import { TemplateRef } from '@angular/core'

export interface TableSelectEvent {
  selection: any,
  row?: number,
}

export interface TableColumn {
  modelKey: string,
  label: string,
  width: string | number,
  index: number,
  slot?: TemplateRef<any>,
  slotClick?: Function,
  deep: number,
  level: number,
  childCount: number,
}

export type TableColumnDataItem = {
  value: string | number,
  index: number,
}

export type ElTableSlotEvent = Element & {
  index: number,
  rowData: any,
  destroy: () => void,
  event?: Event,
}


