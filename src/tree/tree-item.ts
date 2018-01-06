import {
  Component, Input,
} from '@angular/core'
import { ElTreeModelData } from './tree-props'
import { updateDepthIdent } from './utils'

@Component({
  selector: 'el-tree-item',
  template: `
    <div class="el-tree-node" (click)="clickHandle()"
      role="treeitem">
      <div class="el-tree-node__content"
        [ngStyle]="{ 'padding-left': (depthIdentModel._level - 1) * indent + 'px' }">
      <span class="el-tree-node__expand-icon el-icon-caret-right"
        (click)="iconClickHandle()">
        <span class="el-tree-node__label">{{ depthIdentModel.label }}</span>
      </span>
      </div>
      <div class="el-tree-node__children"
        *ngIf="depthIdentModel.children && depthIdentModel.children.length">
        <el-tree-item *ngFor="let item of depthIdentModel.children"
          [model]="item" [indent]="indent">
        </el-tree-item>
      </div>
    </div>
  `,
})
export class ElTreeItem {
  
  depthIdentModel: ElTreeModelData
  @Input() indent: number
  @Input() set model(val: ElTreeModelData) {
    console.log(val)
    this.depthIdentModel = updateDepthIdent(val)
  }
  
  constructor(
  ) {
  }
  
  
}
