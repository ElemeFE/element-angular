import { ElTreeModelData } from './tree-props'

export const notEmptyArray = (arr?: any): boolean => {
  if (!Array.isArray(arr)) return false
  return arr && arr.length > 0
}

export const makeRandomID = () => Math.random().toString(16).slice(-8)

export type ModelStandardInit = {
  initDepth: number,
  defaultExpandAll: boolean,
  defaultExpandedKeys: Array<string | number>,
  defaultCheckedKeys: Array<string | number>,
}

export class ModelStandard {

  constructor(private init: ModelStandardInit) {
  }
  
  filterModel(models: ElTreeModelData[]): ElTreeModelData[] {
    return this.updateDepthIdent(models, this.init.initDepth)
  }
  
  private updateDepthIdent(models: ElTreeModelData[], depth: number)
  : ElTreeModelData[] {
    return models.map(item => {
      const nextID: string | number = item.id || makeRandomID()
      const nextChildren: ElTreeModelData[] = notEmptyArray(item.children)
        ? this.updateDepthIdent(item.children, depth + 1) : []
      const nextIndeterminate: boolean = !!nextChildren.find(item => item.checked || item._indeterminate)
      const allChecked: boolean = nextChildren.length > 0 && !nextChildren.find(item => !item.checked)
      return Object.assign({}, item, {
        id: nextID,
        checked: allChecked || this.isChecked(nextID, item),
        _level: depth ? depth + 1 : 1,
        _expanded: this.isExpanded(nextID),
        _indeterminate: allChecked ? false : nextIndeterminate,
        children: nextChildren,
      })
    })
  }
  
  private isExpanded(id: string | number): boolean {
    if (this.init.defaultExpandAll) return true
    if (!this.init.defaultExpandedKeys.length) return false
    return !!this.init.defaultExpandedKeys.find(key => key === id)
  }
  
  private isChecked(id: string | number, item: ElTreeModelData): boolean {
    if (item.checked === true) return true
    if (!this.init.defaultCheckedKeys.length) return false
    return !!this.init.defaultCheckedKeys.find(key => key === id)
  }
}
