import { EventEmitter, Input, Output } from '@angular/core'

export type ElTreeModelData = {
  label: string,
  _level?: number,
  id?: number | string,
  children?: ElTreeModelData[],
}

export type ElTreeModelEvent = {
  label: string,
  treeNodeID: string,
}

export class ElTreeProps {
  @Input() model: ElTreeModelData[] = []
  @Output() modelChange: EventEmitter<ElTreeModelEvent> = new EventEmitter<ElTreeModelEvent>()
  
  @Input('empty-text') emptyText: string = ''
  @Input() indent: number = 16
}
