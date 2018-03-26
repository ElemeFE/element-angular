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
      [class.is-focusable]="!root.elDisabled"
      [class.is-checked]="!root.elDisabled && model.checked"
      role="treeitem">
      <div class="el-tree-node__content"
        [ngStyle]="{ 'padding-left': (model._level - 1) * indent + 'px' }">
        <span class="el-tree-node__expand-icon el-icon-caret-right"
          [class.expanded]="model.expanded"
          [class.is-leaf]="isLeaf()"
          (click)="iconClickHandle($event)"></span>
        <el-checkbox *ngIf="root.showCheckbox" [model]="model.checked" [indeterminate]="model._indeterminate"
          [elDisabled]="root.elDisabled"
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
    if (!this.root.expandOnClickNode) return this.itemEmitter('click')
    this.updateExpanded()
  }
  
  iconClickHandle(event: MouseEvent): void {
    event.stopPropagation()
    this.updateExpanded()
  }
  
  checkHandle(): void {
    if (this.root.elDisabled) return
    this.root.updateChecked(this.model.id)
    this.root.emitter({
      label: this.model.label,
      treeNodeID: this.model.id,
      action: 'checkbox',
      checked: this.model.checked,
    })
  }
  
  updateExpanded(): void {
    const dontUpdateExpanded: boolean = this.isLeaf()
    const nextAction: string = dontUpdateExpanded ? 'click' : (this.model.expanded ? 'close' : 'open')
    this.itemEmitter(nextAction)
    !dontUpdateExpanded && this.root.updateExpanded(this.model.id)
  }
  
  isLeaf(): boolean {
    return !this.model.children || !this.model.children.length
  }
  
  itemEmitter(action: string): void {
    this.root.emitter({
      label: this.model.label,
      treeNodeID: this.model.id,
      action: action,
      checked: this.model.checked,
    })
  }
  
}
