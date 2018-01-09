import {
  Component, Input, Optional,
} from '@angular/core'
import { ElTree } from './tree'
import { ElTreeModelData } from './tree-props'
import { dropAnimation } from '../shared/animation'

@Component({
  selector: 'el-tree-item',
  animations: [dropAnimation],
  
  template: `
    <div class="el-tree-node" (click)="clickHandle($event)"
      role="treeitem">
      <div class="el-tree-node__content"
        [ngStyle]="{ 'padding-left': (model._level - 1) * indent + 'px' }">
        <span class="el-tree-node__expand-icon el-icon-caret-right"
          [class.expanded]="model.expanded"
          [class.is-leaf]="isLeaf()"
          (click)="iconClickHandle()"></span>
        <el-checkbox *ngIf="root.showCheckbox" [model]="model.checked" [indeterminate]="model._indeterminate"
          (modelChange)="checkHandle($event)">
        </el-checkbox>
        <span class="el-tree-node__label">{{ model.label }}</span>
      </div>
      <div class="el-tree-node__children" *ngIf="!isLeaf()" [@dropAnimation]="model.expanded">
        <el-tree-item *ngFor="let item of model.children"
          [model]="item" [indent]="indent">
        </el-tree-item>
      </div>
    </div>
  `,
})
export class ElTreeItem {
  
  @Input() indent: number
  @Input() model: ElTreeModelData
  
  constructor(
    @Optional() public root: ElTree,
  ) {
  }
  
  clickHandle(event: MouseEvent): void {
    event.stopPropagation()
    const dontUpdateExpanded: boolean = this.isLeaf()
    const nextAction: string = dontUpdateExpanded ? 'click' : (this.model.expanded ? 'close' : 'open')
    this.root.emitter({
      label: this.model.label,
      treeNodeID: this.model.id,
      action: nextAction,
      checked: this.model.checked,
    })
    !dontUpdateExpanded && this.root.updateExpanded(this.model.id)
  }
  
  checkHandle(): void {
    this.root.updateChecked(this.model.id)
    this.root.emitter({
      label: this.model.label,
      treeNodeID: this.model.id,
      action: 'checkbox',
      checked: this.model.checked,
    })
  }
  
  isLeaf(): boolean {
    return !this.model.children || !this.model.children.length
  }
  
}
