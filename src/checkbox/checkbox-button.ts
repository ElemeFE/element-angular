import {
  Component, Input, Output, EventEmitter, OnInit,
  ElementRef, Optional
} from '@angular/core'
import { ElCheckboxGroup } from './checkbox-group'
import { Utils } from '../shared'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'el-checkbox-button',
  template: `
    <label [class]="'el-checkbox-button' + (size ? ' el-checkbox-button--' + size : '') "
      [class.is-disabled]="disabled" [class.is-focus]="focus"
      [class.is-indeterminate]="indeterminate" [class.is-checked]="checked">
      <input class="el-checkbox-button__original" type="checkbox"
        [disabled]="disabled" [value]="label" [name]="name"
        [ngModel]="model" (ngModelChange)="changeHandle($event)"
        (focus)="toggleFocus(true)" (blur)="toggleFocus(false)">
      <span class="el-checkbox-button__inner" [style]="checked ? activeStyle() : ''">
        <ng-container *ngIf="label">{{label}}</ng-container>
        <ng-content *ngIf="!label"></ng-content>
      </span>
    </label>
  `,
})
export class ElCheckboxButton implements OnInit {
  
  @Input() label: string
  @Input() model: any
  @Input() disabled: boolean = false
  @Input() indeterminate: boolean = false
  @Input() checked: boolean = false
  @Input() name: string
  @Input('true-label') trueLabel: string | number
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  private labels: any[]
  private parentIsGroup: boolean = false
  private focus: boolean = false
  // special key
  private size: string
  
  constructor(
    @Optional() private hostGroup: ElCheckboxGroup,
    private el: ElementRef,
    private domSanitizer: DomSanitizer,
  ) {
  }
  
  activeStyle(): SafeStyle {
    if (!this.hostGroup) return this.domSanitizer.bypassSecurityTrustStyle('')
    const styles: string = `backgroundColor: ${this.hostGroup.fill};` +
      `borderColor: ${this.hostGroup.fill};color: ${this.hostGroup.textColor};` +
      `box-shadow: -1px 0 0 0 ${this.hostGroup.fill};`
    return this.domSanitizer.bypassSecurityTrustStyle(styles)
  }
  
  toggleFocus(t: boolean): void {
    this.focus = t
  }
  
  isChecked(): boolean {
    if (this.parentIsGroup) {
      return this.hostGroup.model.indexOf(this.label) > -1
    }
    return this.model
  }
  
  changeHandle(t: boolean): void {
    this.parentIsGroup && this.hostGroup.updateModelFromChildren(t, this.label)
    this.model = t
    this.checked = this.isChecked()
  }
  
  ngOnInit(): void {
    const nativeElement = this.el.nativeElement
    this.parentIsGroup = Utils.isParentTag(nativeElement, 'el-checkbox-group')
    // update model from group
    if (this.parentIsGroup) {
      this.labels = this.hostGroup.model
      this.size = this.hostGroup.size
      this.model = this.isChecked()
      // update handle
      this.hostGroup.subscriber.push(() => this.model = this.isChecked())
    }
    this.checked = this.isChecked()
  }
}
