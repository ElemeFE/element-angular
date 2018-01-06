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
    this.deepUpdateExpanded(id, this.identModel)
  }
  
  emitter(next: ElTreeModelEvent): void {
    this.modelChange.emit(next)
  }
  
  private deepUpdateExpanded(id: string | number, models: ElTreeModelData[]): ElTreeModelData[] {
    if (!models || !models.length) return []
    const index = models.findIndex(item => item.id === id)
    
    if (index === -1) return models.map(item =>
    Object.assign({}, item, {
      children: this.deepUpdateExpanded(id, item.children || [])
    }))
  
    // in accordion mode, only open one.
    if (this.accordion) {
      models.forEach(item => item._expanded = false)
    }
    models[index]._expanded = !models[index]._expanded
    return models
  }
  
}
