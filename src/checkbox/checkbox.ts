import {
  Component, Input, Output, EventEmitter, OnInit,
  ElementRef, Optional, AfterViewInit, ViewChild, OnChanges, SimpleChanges, forwardRef,
} from '@angular/core'
import { ElCheckboxGroup } from './checkbox-group'
import { isParentTag, removeNgTag } from '../shared/utils'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'el-checkbox',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ElCheckbox),
    multi: true
  }],
  template: `
    <label class="el-checkbox">
    <span class="el-checkbox__input"
      [class.is-disabled]="disabled" [class.is-focus]="isFocus"
      [class.is-indeterminate]="indeterminate" [class.is-checked]="checked">
      <span class="el-checkbox__inner"></span>
      <input class="el-checkbox__original" type="checkbox"
        [disabled]="disabled" [value]="label" [name]="name"
        [ngModel]="model" (ngModelChange)="changeHandle($event)"
        (focus)="isFocus = true" (blur)="isFocus = false">
    </span>
    <span class="el-checkbox__label" style="padding-left: 6px;">
      <ng-container *ngIf="showLabel">{{label}}</ng-container>
      <span *ngIf="!showLabel" #content>
        <ng-content></ng-content>
      </span>
    </span>
    </label>
  `,
})
export class ElCheckbox implements OnInit, AfterViewInit, OnChanges, ControlValueAccessor {
  
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
  
  constructor(
    @Optional() private hostGroup: ElCheckboxGroup,
    private el: ElementRef,
  ) {
  }
  
  isChecked(): boolean {
    if (this.parentIsGroup) {
      return this.hostGroup.model.indexOf(this.label) > -1
    }
    return this.model
  }
  
  changeHandle(t: boolean): void {
    if (this.parentIsGroup) {
      return this.hostGroup.updateModelFromChildren(t, this.label)
    }
    this.model = t
    this.checked = this.isChecked()
    this.modelChange.emit(this.model)
    this.controlChange(this.model)
  }
  
  ngOnInit(): void {
    const nativeElement = this.el.nativeElement
    this.parentIsGroup = isParentTag(nativeElement, 'el-checkbox-group')
    removeNgTag(nativeElement)
    // update model from group
    if (this.parentIsGroup) {
      this.labels = this.hostGroup.model
      this.model = this.isChecked()
      // update handle
      this.hostGroup.subscriber.push(() => {
        this.model = this.isChecked()
        this.checked = this.isChecked()
      })
    }
    this.checked = this.isChecked()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes || !changes.model) return
    if (changes.model.isFirstChange()) return
    this.changeHandle(this.model)
  }
  
  ngAfterViewInit(): void {
    const contentText = this.content && this.content.nativeElement.innerText
    setTimeout(() => {
      this.showLabel = !contentText || contentText.length < 1
    }, 0)
  }
  
  writeValue(value: any): void {
    this.model = value
  }
  
  registerOnChange(fn: Function): void {
    this.controlChange = fn
  }
  
  registerOnTouched(fn: Function): void {
    this.controlTouch = fn
  }
  
  private controlChange: Function = () => {}
  private controlTouch: Function = () => {}
  
}
