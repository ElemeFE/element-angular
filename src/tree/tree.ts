import { Component } from '@angular/core'
import { ModelStandard } from './utils'
import { ElTreeProps, ElTreeModelEvent } from './tree-props'

export type UserSafeHooks = {
  findAllChecked: () => string[],
  removeAllChecked: () => void,
  updateItemChecked: (id: string | number) => void,
  updateItemExpanded: (id: string | number) => void,
}

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
  
  userSafeHooks: () => UserSafeHooks = () => ({
    findAllChecked: this.findAllChecked.bind(this),
    updateItemChecked: this.updateChecked.bind(this),
    updateItemExpanded: this.updateExpanded.bind(this),
    removeAllChecked: this.removeAllChecked.bind(this),
  })
  
  findAllChecked(): string[] {
    if (!this.showCheckbox) return []
    return ModelStandard.FindAllChecked(this.identModel)
  }
  
  removeAllChecked(): void {
    ModelStandard.LoopRemoveChecked(this.identModel)
  }
  
  updateExpanded(id: string | number): void {
    this.identModel = ModelStandard.DeepUpdateExpanded(id, this.identModel, this.accordion)
  }
  
  updateChecked(id: string | number): void {
    if (!this.showCheckbox) return
    this.identModel = ModelStandard.DeepUpdateChecked(id, this.identModel)
  }
  
  emitter(next: ElTreeModelEvent): void {
    this.modelChange.emit(next)
  }
  
}
