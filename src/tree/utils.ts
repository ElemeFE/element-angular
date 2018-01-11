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
  
  static LoopRemoveChecked(models: ElTreeModelData[]): void {
    models.forEach(item => {
      item.checked = false
      if (item.children && item.children.length) {
        ModelStandard.LoopRemoveChecked(item.children)
      }
    })
  }
  
  static DeepUpdateExpanded(id: string | number, models: ElTreeModelData[], accordion: boolean): ElTreeModelData[] {
    if (!models || !models.length) return []
    const index = models.findIndex(item => item.id === id)
  
    if (index === -1) return models.map(item =>
      Object.assign(item, {
        children: ModelStandard.DeepUpdateExpanded(id, item.children || [], accordion)
      }))
  
    // in accordion mode, only open one.
    // dont return new object, new object will cause the component to be re rendered,
    // and the current animation may be lost.
    const nextExpanded: boolean = !models[index].expanded
    if (accordion) {
      models = models.map(item => Object.assign(item, {
        expanded: false
      }))
    }
    models[index].expanded = nextExpanded
    return models
  }
  
  static DeepUpdateChecked(id: string | number, models: ElTreeModelData[]): ElTreeModelData[] {
    if (!models || !models.length) return []
    const index = models.findIndex(item => item.id === id)
  
    if (index === -1) {
      models.forEach(item => {
        const nextChildren: ElTreeModelData[] = ModelStandard.DeepUpdateChecked(id, item.children || [])
        const nextIndeterminate: boolean = !!nextChildren.find(item => item.checked || item._indeterminate)
        const allChecked: boolean = nextChildren.length > 0 && !nextChildren.find(item => !item.checked)
      
        item._indeterminate = allChecked ? false : nextIndeterminate
        item.children = nextChildren
      
        // leaf have have no subelements so no need to be updated。
        // leaf element is not affected by subelements.
        if (nextChildren.length) {
          item.checked = allChecked
        }
      })
      return models
    }
  
    models[index].checked = !models[index].checked
    models[index]._indeterminate = false
    if (models[index].children && models[index].children.length > 0) {
      ModelStandard.SetChildrenChecked(models[index].children, models[index].checked)
    }
    return models
  }
  
  static SetChildrenChecked(models: ElTreeModelData[], checked: boolean): void {
    models.forEach(item => {
      item.checked = checked
      if (item.children && item.children.length) {
        ModelStandard.SetChildrenChecked(item.children, checked)
      }
    })
  }
  
  static FindAllChecked(models: ElTreeModelData[]): string[] {
    const checkedLabels = models.reduce((labels: string[] = [], item): any => {
      const childrenLabels = (item.children && item.children.length)
        ? ModelStandard.FindAllChecked(item.children)
        : []
      return labels.concat(...childrenLabels, item.checked ? item.label : [])
    }, [])
    return checkedLabels
  }

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
        expanded: this.isExpanded(nextID, item),
        _indeterminate: allChecked ? false : nextIndeterminate,
        children: nextChildren,
      })
    })
  }
  
  private isExpanded(id: string | number, item: ElTreeModelData): boolean {
    if (item.expanded === true) return true
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
