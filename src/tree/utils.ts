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
      const nextID = item.id || makeRandomID()
      return Object.assign({}, item, {
        _level: depth ? depth + 1 : 1,
        id: nextID,
        _expanded: this.isExpanded(nextID),
        children: notEmptyArray(item.children) ? this.updateDepthIdent(item.children, depth + 1) : []
      })
    })
  }
  
  private isExpanded(id: string | number): boolean {
    if (this.init.defaultExpandAll) return true
    if (!this.init.defaultExpandedKeys.length) return false
    return !!this.init.defaultExpandedKeys.find(key => key === id)
  }
}
