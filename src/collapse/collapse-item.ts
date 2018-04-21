import { Component, ContentChild, Input, OnInit, Optional, TemplateRef } from '@angular/core'
import { ElCollapse, ModelValue } from './collapse'
import { dropAnimation } from '../shared/animation'

@Component({
  selector: 'el-collapse-item',
  animations: [dropAnimation],
  styles: [`.el-collapse-item-fix-border:last-child { margin-bottom: 0; }`],
  template: `
    <div class="el-collapse-item el-collapse-item-fix-border" [class.is-active]="isActive">
      <div role="tab" [attr.aria-expanded]="isActive">
        <div class="el-collapse-item__header" (click)="clickHandle()" role="button">
          <i class="el-collapse-item__arrow el-icon-arrow-right"></i>
          <ng-container *ngIf="labelTmp">
            <ng-template [ngTemplateOutlet]="labelTmp">
            </ng-template>
          </ng-container>
          <ng-container *ngIf="!labelTmp">{{label}}</ng-container>
        </div>
      </div>
      
      <div class="el-collapse-item__wrap" [ngStyle]="{'border-width': isActive ? '1px' : '0'}">
        <div class="el-collapse-item__content" [@dropAnimation]="isActive">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class ElCollapseItem implements OnInit {
  
  @ContentChild('label') labelTmp: TemplateRef<any>
  @Input() label: string
  @Input() value: ModelValue | null = null
  isActive: boolean = false
  
  constructor(
    @Optional() private root: ElCollapse,
  ) {
  }
  
  updateActiveStatus(): void {
    this.isActive = this.root.modelValue.some(val => val === this.value)
  }
  
  clickHandle(): void {
    if (this.value === null) {
      this.value = Math.random().toString(16).substr(2, 8)
    }
    this.root.updateModel(this.value)
  }
  
  ngOnInit(): void {
    const updateHandle: Function = () => this.updateActiveStatus()
    this.root.subscriber.push(updateHandle)
  }
  
}
