import { Component, ContentChild, Input, Optional, TemplateRef } from '@angular/core'
import { ElCollapse, ModelValue } from './collapse'
import { dropAnimation } from '../shared/animation'

@Component({
  selector: 'el-collapse-item',
  animations: [dropAnimation],
  template: `
    <div class="el-collapse-item" [class.is-active]="isActive()">
      <div class="el-collapse-item__header" (click)="clickHandle()">
        <i class="el-collapse-item__header__arrow el-icon-arrow-right"></i>
        <ng-container *ngIf="labelTmp">
          <ng-template [ngTemplateOutlet]="labelTmp">
          </ng-template>
        </ng-container>
        <ng-container *ngIf="!labelTmp">{{label}}</ng-container>
      </div>
      <div class="el-collapse-item__wrap" [ngStyle]="{'border-width': isActive() ? '1px' : '0'}">
        <div class="el-collapse-item__content" [@dropAnimation]="isActive()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class ElCollapseItem {
  
  @ContentChild('label') labelTmp: TemplateRef<any>
  @Input() label: string
  @Input() value: ModelValue
  
  constructor(
    @Optional() private root: ElCollapse,
  ) {
  
  }
  
  isActive(): boolean {
    return this.root.model.some(val => val === this.value)
  }
  
  clickHandle(): void {
    this.root.updateModel(this.value)
  }
  
}


