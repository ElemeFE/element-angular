import {
  Component, Input, Output, EventEmitter, OnInit,
  ElementRef, Optional
} from '@angular/core'
import { ElCheckboxGroup } from './checkbox-group'
import { Utils } from '../shared'

@Component({
  selector: 'el-checkbox',
  template: `
    <label class="el-checkbox">
    <span class="el-checkbox__input"
      [class.is-disabled]="disabled" [class.is-focus]="focus"
      [class.is-indeterminate]="indeterminate" [class.is-checked]="checked">
      <span class="el-checkbox__inner"></span>
      <input class="el-checkbox__original" type="checkbox"
        [disabled]="disabled" [value]="label" [name]="name"
        [ngModel]="model" (ngModelChange)="changeHandle($event)"
        (focus)="toggleFocus(true)" (blur)="toggleFocus(false)">
    </span>
      <span class="el-checkbox__label" v-if="$slots.default || label">
        <ng-container *ngIf="label">{{label}}</ng-container>
        <ng-content *ngIf="!label"></ng-content>
      </span>
    </label>
  `,
})
export class ElCheckbox implements OnInit {
  
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
  
  constructor(
    @Optional() private hostGroup: ElCheckboxGroup,
    private el: ElementRef,
  ) {
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
      this.model = this.isChecked()
      // update handle
      this.hostGroup.subscriber.push(() => this.model = this.isChecked())
    }
    this.checked = this.isChecked()
  }
}
