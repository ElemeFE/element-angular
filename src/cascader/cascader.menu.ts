import { Component, Optional } from '@angular/core'
import { ElCascader } from './cascader'
import { dropAnimation } from '../shared/animation'

@Component({
  selector: 'el-cascader-menu',
  template: `
    <div class="el-cascader-menus"
      style="z-index: 2007; position: absolute; top: 100%; left: 0;"
      [@dropAnimation]="root.menuVisible"
      (click)="clickHandle($event)">
      <ul class="el-cascader-menu" *ngFor="let menuItem of root.steps; let step = index">
        <li *ngFor="let listItem of menuItem; let i = index"
          class="el-cascader-menu__item"
          [class.el-cascader-menu__item--extensible]="listItem.children"
          [class.is-active]="listItem.active"
          [class.is-disabled]="listItem.disabled"
          (click)="root.selectHandle($event, step, i)">
          {{listItem.label}}
        </li>
      </ul>
    </div>
  `,
  animations: [dropAnimation],
})
export class ElCascaderMenu {
  
  constructor(
    @Optional() public root: ElCascader,
  ) {
  }
  
  clickHandle(event: Event): void {
    event.stopPropagation()
  }
}
