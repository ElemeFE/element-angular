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
          [class.expanded]="model._expanded"
          [class.is-leaf]="isLeaf()"
          (click)="iconClickHandle()"></span>
        <span class="el-tree-node__label">{{ model.label }}</span>
      </div>
      <div class="el-tree-node__children" *ngIf="!isLeaf()" [@dropAnimation]="model._expanded">
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
    @Optional() private root: ElTree,
  ) {
  }
  
  clickHandle(event: MouseEvent): void {
    event.stopPropagation()
    const dontUpdateExpanded: boolean = this.isLeaf()
    const nextAction: string = dontUpdateExpanded ? 'click' : (this.model._expanded ? 'close' : 'open')
    this.root.emitter({
      label: this.model.label,
      treeNodeID: this.model.id,
      action: nextAction,
    })
    !dontUpdateExpanded && this.root.updateExpanded(this.model.id)
  }
  
  isLeaf(): boolean {
    return !this.model.children || !this.model.children.length
  }
  
}
