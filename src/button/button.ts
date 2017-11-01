import {
  Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy,
  ElementRef,
} from '@angular/core'
import { removeNgTag } from '../shared/utils'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'el-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <button (click)="clickHandle($event)"
    [class]="'el-button ' + (themeType ? ' el-button--' + themeType : '')
      + (size ? ' el-button--' + size : '') + ' ' + nativeClass"
    [class.is-disabled]="disabled"
    [class.is-loading]="loading"
    [class.is-plain]="plain"
    [class.is-round]="round"
    [disabled]="disabled"
    [type]="nativeType"
    [style]="extendStyles()"
    [autofocus]="autofocus">
    <i class="el-icon-loading" *ngIf="loading"></i>
    <i [class]="'el-icon-' + icon" *ngIf="icon && !loading"></i>
    <ng-content></ng-content>
  </button>
  `,
})
export class ElButton implements OnInit {
  
  @Input('type') themeType: string = ''
  @Input('native-type') nativeType: string = 'button'
  @Input() size: string = ''
  @Input() icon: string = ''
  @Input() disabled: boolean = false
  @Input() loading: boolean = false
  @Input() plain: boolean = false
  @Input() round: boolean = false
  @Input() autofocus: boolean = false
  @Input() style: string = ''
  @Input('class') nativeClass: string = ''
  @Output() click: EventEmitter<any> = new EventEmitter<any>()
  
  constructor(
    private el: ElementRef,
    private sanitizer: DomSanitizer,
  ) {
  }
  
  clickHandle($event: Event): void {
    this.click.emit($event)
  }
  
  extendStyles(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(this.style)
  }
  
  ngOnInit(): void {
    removeNgTag(this.el.nativeElement)
  }
  
}
