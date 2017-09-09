import { Component, Input, ChangeDetectionStrategy} from '@angular/core'
import { fadeAnimation } from '../shared/animation'

@Component({
  selector: 'el-alert',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="'el-alert ' + typeClass" [@fadeAnimation]="visible">
      <i [class]="'el-alert__icon ' + iconClass + ' ' + isBigIcon" *ngIf="showIcon"></i>
      <div class="el-alert__content">
        <span [class]="'el-alert__title ' + isBoldTitle" *ngIf="title">{{title}}</span>
        <slot>
          <p class="el-alert__description" *ngIf="description">{{description}}</p>
        </slot>
        <i class="el-alert__closebtn"
          [class.is-customed]="closeText !== ''"
          [class.el-icon-close]="closeText === ''"
          *ngIf="closable"
          (click)="close()">
          {{closeText}}
        </i>
      </div>
    </div>
  `,
})
export class ElAlert {
  
  @Input() model: string | number
  
}
