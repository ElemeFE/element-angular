import { Component, ContentChild, ElementRef, Input, OnInit, Optional, TemplateRef } from '@angular/core'
import { ElCollapse, ModelValue } from './collapse'
import { dropAnimation } from '../shared/animation'
import { removeNgTag } from '../shared/utils'

@Component({
  selector: 'el-collapse-item',
  animations: [dropAnimation],
  template: `
    <div class="el-collapse-item" [class.is-active]="isActive()">
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
      
      <div class="el-collapse-item__wrap" [ngStyle]="{'border-width': isActive() ? '1px' : '0'}">
        <div class="el-collapse-item__content" [@dropAnimation]="isActive()">
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
  
  constructor(
    @Optional() private root: ElCollapse,
    private el: ElementRef,
  ) {
  }
  
  isActive(): boolean {
    return this.root.model.some(val => val === this.value)
  }
  
  clickHandle(): void {
    if (this.value === null) {
      this.value = Math.random().toString(16).substr(2, 8)
    }
    this.root.updateModel(this.value)
  }
  
  ngOnInit(): void {
    removeNgTag(this.el.nativeElement)
  }
  
}


