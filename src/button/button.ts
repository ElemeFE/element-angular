import { Component, Input, Output, EventEmitter, ContentChild, ChangeDetectionStrategy} from '@angular/core'
import { ElButtonConfig } from './button-config'
import { ClassesType } from '../radio/radio.interface'

@Component({
  selector: 'el-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <button (click)="clickHandle($event)"
    [disabled]="disabled"
    [ngClass]="classes()"
    [type]="nativeType"
    [class]="'el-button' + (themeType && ' el-button--' + themeType) + (size && ' el-button--' + size)"
    [autofocus]="autofocus">
    <i class="el-icon-loading" *ngIf="loading"></i>
    <i [class]="'el-icon-' + icon" *ngIf="icon && !loading"></i>
    <ng-content></ng-content>
  </button>
  `,
})
export class ElButton {
  
  @Input('type') themeType: string = ''
  @Input('native-type') nativeType: string = ''
  @Input() size: string = ''
  @Input() icon: string = ''
  @Input() disabled: boolean
  @Input() loading: boolean
  @Input() plain: boolean
  @Input() autofocus: boolean
  @Output() click: EventEmitter<any> = new EventEmitter<any>()
  
  constructor(private config: ElButtonConfig) {
    this.disabled = config.disabled
    this.loading = config.loading
    this.plain = config.plain
    this.autofocus = config.autofocus
  }
  
  classes(): ClassesType {
    return {
      'is-disabled': this.disabled,
      'is-loading': this.loading,
      'is-plain': this.plain,
    }
  }
  
  clickHandle($event: Event): void {
    this.click.emit($event)
  }
  
}
