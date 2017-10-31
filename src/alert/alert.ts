import {
  Component, Input, ChangeDetectionStrategy, Output, EventEmitter,
  ContentChild, TemplateRef,
} from '@angular/core'
import { fadeAnimation } from './animation'

export const ICON_CLASS_MAP: { [key: string]: string } = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error',
  'info': 'el-icon-info',
}

@Component({
  selector: 'el-alert',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="'el-alert el-alert--' + type" [@fadeAnimation]="!visible"
      [class.is-center]="center" role="alert">
      <i [class]="'el-alert__icon ' + makeIconClass()" *ngIf="showIcon"></i>
      <div class="el-alert__content">
        <span [class]="'el-alert__title ' + makeTitleClass()">
          <ng-content></ng-content>
        </span>
        <p class="el-alert__description" *ngIf="description && !descriptionTmp">{{description}}</p>
        <p class="el-alert__description" *ngIf="descriptionTmp"><ng-template [ngTemplateOutlet]="descriptionTmp"></ng-template></p>
        <i class="el-alert__closebtn"
          *ngIf="closable"
          [class.is-customed]="closeText !== ''"
          [class.el-icon-close]="closeText === ''"
          (click)="clickHandle($event)">
          {{closeText}}
        </i>
      </div>
    </div>
  `,
})
export class ElAlert {
  
  @ContentChild('description') descriptionTmp: TemplateRef<any>
  
  @Input() type: string = 'info'
  @Input() center: boolean = false
  @Input() description: string
  @Input() closable: boolean = true
  @Input('close-text') closeText: string = ''
  @Input('show-icon') showIcon: boolean = false
  @Output() close: EventEmitter<Event> = new EventEmitter<Event>()
  
  visible: boolean = true
  
  constructor() {
  }
  
  makeIconClass(): string {
    const base: string = ICON_CLASS_MAP[this.type] || 'el-icon-info'
    const isBig: string = this.description || this.descriptionTmp ? ' is-big' : ''
    return base + isBig
  }
  
  makeTitleClass(): string {
    return this.description || this.descriptionTmp ? ' is-bold' : ''
  }
  
  clickHandle(event: Event): void {
    this.visible = false
    this.close.emit(event)
  }
  
}
