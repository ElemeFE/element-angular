import {
  Component
} from '@angular/core'
import { ElTreeProps } from './tree-props'


@Component({
  selector: 'el-tree',
  template: `
    <div class="el-tree" [class.el-tree--highlight-current]="highlightCurrent" role="tree">
      <el-tree-item *ngFor="let item of model"
        [model]="item" [indent]="indent">
      </el-tree-item>
      <div class="el-tree__empty-block" *ngIf="!model && !model.length">
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
  
}
