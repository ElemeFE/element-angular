import { Component, Input, ViewChild, AfterContentInit, Output, EventEmitter } from '@angular/core'
import { ElRadioConfig } from './radio-config'
import { RadioGroupConfig, Label, ClassesType } from './radio.interface'

@Component({
  selector: 'el-radio-button',
  template: `
    <label [class]="'el-radio-button' + (size ? ' el-radio-button--' + size : '')"
      [ngClass]="classes()">
      <input class="el-radio-button__orig-radio" type="radio"
        [value]="label" [name]="nativeName" [disabled]="disabled"
        [ngModel]="model" (ngModelChange)="changeHandle()">
      <span class="el-radio-button__inner" [ngStyle]="model === label && activeStyle()" #content>
        <ng-content></ng-content>
        <span *ngIf="showLabel">{{label}}</span>
      </span>
    </label>
  `,
})
export class ElRadioButton implements AfterContentInit {
  
  @ViewChild('content') content: any
  
  @Input() disabled: boolean
  @Input() label: Label
  @Input('name') nativeName: string
  @Input() model: any
  @Output() modelChange = new EventEmitter<any>()
  
  constructor(private config: ElRadioConfig) {
    this.disabled = config.disabled
    this.label = config.label
    this.nativeName = config.nativeName
  }
  
  private size: string
  private showLabel: boolean = false
  private isGroup: boolean = false
  private fillColor: string
  private textColor: string
  private modelChangeFromGroup: Function
  
  classes(): ClassesType {
    return {
      'is-disabled': this.disabled,
      'is-active': this.model === this.label,
    }
  }
  
  activeStyle() {
    return {
      backgroundColor: this.fillColor || '',
      borderColor: this.fillColor || '',
      boxShadow: this.fillColor ? `-1px 0 0 0 ${this.fillColor}` : '',
      color: this.textColor || '',
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
    this.size = configFromGroup.buttonSize
    this.fillColor = configFromGroup.fillColor
    this.textColor = configFromGroup.textColor
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
