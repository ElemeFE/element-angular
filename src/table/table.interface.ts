import { TemplateRef } from '@angular/core'

export interface TableSelectEvent {
  selection: any,
  row?: number,
}

export interface TableChangeEvent {
  row?: number,
  column?: number,
  cell?: number,
  event:Event,
}

export interface FilterChangeEvent {
  key: number | string,
  value: any[],
}

export interface RowChangeEvent {
  currentVlue: number,
  lastValue: number,
}

export type changes = {
  currentVlue: number,
  lastValue: number,
}

export interface TableDragendEvent {
  width: changes,
  column: number,
  event: Event,
}

export interface ExpandEvent {
  row: number,
  expanded: any,
}

export interface TableColumn {
  modelKey: string,
  label: string,
  width: string | number,
  index: number,
  slot?: TemplateRef<any>,
  slotClick?: Function,
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


