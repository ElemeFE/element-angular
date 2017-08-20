import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core'

@Component({
  selector: 'el-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label class="el-checkbox">
    <span class="el-checkbox__input" [ngClass]="classes">
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
  @Output() modelChange = new EventEmitter<any>()
  
  private labels: string
  private focus: boolean = false
  private classes: any = {
    'is-disabled': this.disabled,
    'is-checked': this.isChecked(),
    'is-indeterminate': this.indeterminate,
    'is-focus': this.focus,
  }
  
  constructor() {
  }
  
  toggleFocus(t: boolean):void {
    this.focus = t
  }
  
  isChecked():boolean {
    if (this.labels) {
      return this.labels.indexOf(this.label) > -1
    }
    return this.model
  }
  
  changeHandle(t: boolean): void {
    this.model = t
    this.classes['is-checked'] = this.isChecked()
    this.modelChange.emit(this.model)
  }
  
  ngOnInit(): void {
    this.classes['is-checked'] = this.isChecked()
  }
}
