import { Component, Input, ViewChild, AfterContentInit, Output, EventEmitter } from '@angular/core'
import { ElRadioConfig } from './radio-config'
import { RadioGroupConfig, Label, ClassesType } from './radio.interface'

@Component({
  selector: 'el-radio',
  template: `
    <label class="el-radio">
      <span class="el-radio__input" [ngClass]="classes()">
        <span class="el-radio__inner"></span>
        <input class="el-radio__original" type="radio"
          [value]="label" [name]="nativeName" [disabled]="disabled"
          (focus)="isFocus = true" (blur)="isFocus = false"
          [ngModel]="model" (ngModelChange)="changeHandle()">
      </span>
      <span class="el-radio__label" #content>
        <ng-content></ng-content>
        <span *ngIf="showLabel">{{label}}</span>
      </span>
    </label>
  `,
})
export class ElRadio implements AfterContentInit {
  
  @ViewChild('content') content: any
  
  @Input() disabled: boolean
  @Input() label: Label
  @Input('name') nativeName: string
  @Input() model: any
  @Output() modelChange = new EventEmitter<any>()
  
  private isFocus: boolean = false
  private showLabel: boolean = false
  private isGroup: boolean = false
  private modelChangeFromGroup: Function
  
  constructor(private config: ElRadioConfig) {
    this.disabled = config.disabled
    this.label = config.label
    this.nativeName = config.nativeName
  }
  
  classes(): ClassesType {
    return {
      'is-disabled': this.disabled,
      'is-checked': this.model === this.label,
      'is-focus': this.isFocus,
    }
  }
  
  changeHandle(): void {
    if (this.isGroup) {
      return this.modelChangeFromGroup(this.label)
    }
    this.modelChange.emit(this.label)
  }
  
  _fromParentSet(configFromGroup: RadioGroupConfig): void {
    this.isGroup = true
    this.disabled = configFromGroup.disabled
    this.modelChangeFromGroup = configFromGroup.modelChange
  }
  
  _fromParentSetOnlyModel(model: any): void {
    this.model = model
  }
  
  ngAfterContentInit(): void {
    this.showLabel = this.content.nativeElement.children.length <= 0
  }
  
}
