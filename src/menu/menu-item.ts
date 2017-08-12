import { Component, Input, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'el-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <li class="el-menu-item" (click)="clickHandle"
      [ngStyle]="paddingStyle"
      [ngClass]="{ 'is-active': index === parentIndex, 'is-disabled': disabled }">
      <!--<el-tooltip *ngIf="isGroup" effect="dark" placement="right">-->
        <!--<div slot="content"><ng-content></ng-content></div>-->
        <!--<div style="position: absolute;left: 0;top: 0;height: 100%;width: 100%;display: inline-block;box-sizing: border-box;padding: 0 20px;">-->
          <!--<slot></slot>-->
        <!--</div>-->
      <!--</el-tooltip>-->
      <!--<template v-else>-->
        <!--<slot></slot>-->
        <!--<slot name="title"></slot>-->
      <!--</template>-->
    </li>
  `,
})
export class ElMenuItem {
  
  @Input() index: string
  @Input() disabled: boolean = false
  
  constructor(
  ) {
  }
  
  private parentIndex: string
  private isGroup: boolean = false
  
  paddingStyle(): any {
    return {}
  }
  
  clickHandle(): void {
  
  }
}

