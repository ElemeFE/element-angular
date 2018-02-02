import { EventEmitter, Input, Output } from '@angular/core'
import { ModelStandard } from './utils'

export type ElTreeModelData = {
  label: string,
  checked?: boolean,
  expanded?: boolean,
  _level?: number,
  _indeterminate?: boolean,
  id?: number | string,
  children?: ElTreeModelData[],
}

export type ElTreeModelEvent = {
  label: string,
  treeNodeID: string | number,
  action: string,     // close, open, click, checkbox
  checked: boolean,
}

export class ElTreeProps {
  
  identModel: ElTreeModelData[]
  
  
  @Output() modelChange: EventEmitter<ElTreeModelEvent> = new EventEmitter<ElTreeModelEvent>()
  
  @Input('empty-text') emptyText: string = ''
  @Input('show-checkbox') showCheckbox: boolean = false
  @Input('default-expand-all') defaultExpandAll: boolean = false
  @Input('default-expanded-keys') defaultExpandedKeys: Array<string | number> = []
  @Input('default-checked-keys') defaultCheckedKeys: Array<string | number> = []
  @Input('expand-on-click-node') expandOnClickNode: boolean = true
  @Input() indent: number = 16
  @Input() accordion: boolean = false
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Element Angular: (disabled) is discarded, use [elDisabled] replace it.')
  }
  @Input() elDisabled: boolean = false
}
