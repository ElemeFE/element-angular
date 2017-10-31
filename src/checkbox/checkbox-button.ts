import {
  Component, Input, Output, EventEmitter, OnInit,
  ElementRef, Optional, ViewChild, AfterViewInit, ViewEncapsulation,
} from '@angular/core'
import { ElCheckboxGroup } from './checkbox-group'
import { isParentTag, removeNgTag } from '../shared/utils'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'el-checkbox-button',
  template: `
    <label [class]="'el-checkbox-button' + (size ? ' el-checkbox-button--' + size : '') "
      role="checkbox"
      [class.is-disabled]="disabled" [class.is-focus]="isFocus"
      [class.is-indeterminate]="indeterminate" [class.is-checked]="checked">
      <input class="el-checkbox-button__original" type="checkbox"
        [disabled]="disabled" [value]="label" [name]="name"
        [ngModel]="model" (ngModelChange)="changeHandle($event)"
        (focus)="isFocus = true" (blur)="isFocus = false">
      <span class="el-checkbox-button__inner"
        [style]="activeStyle()">
        <ng-container *ngIf="showLabel">{{label}}</ng-container>
        <span *ngIf="!showLabel" #content>
          <ng-content></ng-content>
        </span>
      </span>
    </label>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class ElCheckboxButton implements OnInit, AfterViewInit {
  
  @ViewChild('content') content: any
  
  @Input() label: string
  @Input() model: any
  @Input() disabled: boolean = false
  @Input() indeterminate: boolean = false
  @Input() checked: boolean = false
  @Input() name: string
  @Input('true-label') trueLabel: string | number
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  labels: any[]
  parentIsGroup: boolean = false
  isFocus: boolean = false
  showLabel: boolean = false
  // special key
  size: string
  
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
    return this.domSanitizer.bypassSecurityTrustStyle(this.checked && !this.disabled ? styles : '')
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
    this.parentIsGroup = isParentTag(nativeElement, 'el-checkbox-group')
    removeNgTag(nativeElement)
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
  
  ngAfterViewInit(): void {
    const contentText = this.content && this.content.nativeElement.innerText
    setTimeout(() => {
      this.showLabel = !contentText || contentText.length < 1
    }, 0)
  }
}
