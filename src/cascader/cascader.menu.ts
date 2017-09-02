import { Component, OnInit, Optional } from '@angular/core'
import { ElCascader } from './cascader'
import { dropAnimation } from '../shared/animation'

@Component({
  selector: 'el-cascader-menu',
  template: `
    <div class="el-cascader-menus"
      style="z-index: 2007; position: absolute; top: 100%; left: 0;"
      [@dropAnimation]="root.menuVisible">
      <ul class="el-cascader-menu" *ngFor="let menuItem of root.steps; let step = index">
        <li *ngFor="let listItem of menuItem; let i = index"
          [class]="'el-cascader-menu__item ' +
          (listItem.children ? 'el-cascader-menu__item--extensible ' : ' ') +
          (listItem.active ? 'is-active' : '')"
          (click)="root.selectHandle(step, i)">
          {{listItem.label}}
        </li>
      </ul>
    </div>
  `,
  animations: [dropAnimation],
})
export class ElCascaderMenu implements OnInit {
  
  constructor(
    @Optional() private root: ElCascader,
  ) {
  }
  
  ngOnInit(): void {
  }
}
