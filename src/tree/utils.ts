import { ElTreeModelData } from './tree-props'

export const notEmptyArray = (arr?: any): boolean => {
  if (!Array.isArray(arr)) return false
  return arr && arr.length > 0
}

export const updateDepthIdent = (model: ElTreeModelData): ElTreeModelData => {
  return Object.assign({}, model, {
    _level: model._level ? model._level + 1 : 1,
    children: notEmptyArray(model.children) ? model.children.map(child => updateDepthIdent(child)) : []
  })
}
