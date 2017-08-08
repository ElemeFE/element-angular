import { Component, Input, Output, EventEmitter, ContentChild, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'el-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <button (click)="clickHandle($event)"
    [disabled]="disabled"
    [ngClass]="classes"
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
  @Input() disabled: boolean = false
  @Input() loading: boolean = false
  @Input() plain: boolean = false
  @Input() autofocus: boolean = false
  
  @Output() click = new EventEmitter<any>()
  
  constructor(
  ) {
  }
  
  classes() {
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
