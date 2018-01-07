import {
  Component, EventEmitter,
} from '@angular/core'
import { ElTreeProps, ElTreeModelData, ElTreeModelEvent } from './tree-props'


@Component({
  selector: 'el-tree',
  template: `
    <div class="el-tree" [class.el-tree--highlight-current]="highlightCurrent" role="tree">
      <el-tree-item *ngFor="let item of identModel"
        [model]="item" [indent]="indent">
      </el-tree-item>
      <div class="el-tree__empty-block" *ngIf="!identModel && !identModel.length">
        <span class="el-tree__empty-text">{{ emptyText }}</span>
      </div>
    </div>
  `,
})
export class ElTree extends ElTreeProps {
  
  constructor(
  ) {
    super()
  }
  
  updateExpanded(id: string | number): void {
    this.identModel = this.deepUpdateExpanded(id, this.identModel)
  }
  
  updateChecked(id: string | number): void {
    this.identModel = this.deepUpdateChecked(id, this.identModel)
  }
  
  emitter(next: ElTreeModelEvent): void {
    this.modelChange.emit(next)
  }
  
  private deepUpdateExpanded(id: string | number, models: ElTreeModelData[]): ElTreeModelData[] {
    if (!models || !models.length) return []
    const index = models.findIndex(item => item.id === id)
    
    if (index === -1) return models.map(item =>
    Object.assign(item, {
      children: this.deepUpdateExpanded(id, item.children || [])
    }))
  
    // in accordion mode, only open one.
    // dont return new object, new object will cause the component to be re rendered,
    // and the current animation may be lost.
    if (this.accordion) {
      models = models.map(item => Object.assign(item, {
        _expanded: false
      }))
    }
    models[index]._expanded = !models[index]._expanded
    return models
  }
  
  private deepUpdateChecked(id: string | number, models: ElTreeModelData[]): ElTreeModelData[] {
    if (!models || !models.length) return []
    const index = models.findIndex(item => item.id === id)
  
    if (index === -1) {
      models.forEach(item => {
        const nextChildren: ElTreeModelData[] = this.deepUpdateChecked(id, item.children || [])
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
      this.setChildrenChecked(models[index].children, models[index].checked)
    }
    return models
  }
  
  private setChildrenChecked(models: ElTreeModelData[], checked: boolean): void {
    models.forEach(item => {
      item.checked = checked
      if (item.children && item.children.length) {
        this.setChildrenChecked(item.children, checked)
      }
    })
  }
  
}
