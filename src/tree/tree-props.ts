import { EventEmitter, Input, Output } from '@angular/core'
import { ModelStandard } from './utils'

export type ElTreeModelData = {
  label: string,
  _level?: number,
  _expanded?: boolean,
  id?: number | string,
  children?: ElTreeModelData[],
}

export type ElTreeModelEvent = {
  label: string,
  treeNodeID: string | number,
  action: string,     // close, open, click
}

export class ElTreeProps {
  
  identModel: ElTreeModelData[]
  
  @Input() set model(val: ElTreeModelData[]) {
    const standardTool = new ModelStandard({
      initDepth: 0,
      defaultExpandAll: this.defaultExpandAll,
      defaultExpandedKeys: this.defaultExpandedKeys,
    })
    this.identModel = standardTool.filterModel(val)
  }
  @Output() modelChange: EventEmitter<ElTreeModelEvent> = new EventEmitter<ElTreeModelEvent>()
  
  @Input('empty-text') emptyText: string = ''
  @Input('default-expand-all') defaultExpandAll: boolean = false
  @Input('default-expanded-keys') defaultExpandedKeys: Array<string | number> = []
  @Input() indent: number = 16
  @Input() accordion: boolean = false
}
