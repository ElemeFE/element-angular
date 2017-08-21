import {
  Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy,
  ElementRef,
} from '@angular/core'
import { Utils } from '../shared'

@Component({
  selector: 'el-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <button (click)="clickHandle($event)"
    [class]="'el-button' + (themeType && ' el-button--' + themeType) + (size && ' el-button--' + size) + nativeClass"
    [class.is-disabled]="disabled"
    [class.is-loading]="loading"
    [class.is-plain]="plain"
    [disabled]="disabled"
    [type]="nativeType"
    [autofocus]="autofocus">
    <i class="el-icon-loading" *ngIf="loading"></i>
    <i [class]="'el-icon-' + icon" *ngIf="icon && !loading"></i>
    <ng-content></ng-content>
  </button>
  `,
})
export class ElButton implements OnInit {
  
  @Input('type') themeType: string = ''
  @Input('native-type') nativeType: string = ''
  @Input() size: string = ''
  @Input() icon: string = ''
  @Input() disabled: boolean = false
  @Input() loading: boolean = false
  @Input() plain: boolean = false
  @Input() autofocus: boolean = false
  @Output() click: EventEmitter<any> = new EventEmitter<any>()
  
  private nativeClass: string = ' '
  
  constructor(
    private el: ElementRef,
  ) {
    this.nativeClass += this.el.nativeElement.classList.value
  }
  
  clickHandle($event: Event): void {
    this.click.emit($event)
  }
  
  ngOnInit(): void {
    Utils.removeNgTag(this.el.nativeElement)
  }
  
}
