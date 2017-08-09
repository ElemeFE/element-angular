import { Component, Input, ViewChild, AfterContentInit } from '@angular/core'
import { ElRadioConfig } from './radio-config'

export type Label = string | boolean | number
export type ClassesType = { [key: string]: any }
export type GroupConfigType = {
  buttonSize?: string,
  fillColor?: string,
  textColor?: string,
}

@Component({
  selector: 'el-radio',
  template: `
    <label class="el-radio">
      <span class="el-radio__input" [ngClass]="classes">
        <span class="el-radio__inner"></span>
        <input class="el-radio__original" type="radio"
          [value]="label"
          ngModel="model"
          (focus)="isFocus = true"
          (blur)="isFocus = false"
          [name]="nativeName"
          [disabled]="isDisabled">
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
  @Input('model') ComponentModel: any
  
  constructor(private config: ElRadioConfig) {
    this.disabled = config.disabled
    this.label = config.label
    this.nativeName = config.nativeName
  }
  
  private model: any
  private isFocus: boolean = false
  private showLabel: boolean = false
  private useParentConfig: boolean = false
  
  classes(): ClassesType {
    return {
      'is-disabled': this.isDisabled,
      'is-checked': this.model === this.label,
      'is-focus': this.isFocus,
    }
  }
  
  isGroup(): boolean {
    
    return false
  }
  
  isDisabled(): boolean {
    return false
  }
  
  _fromParentSet(configFromGroup: GroupConfigType): void {
    this.useParentConfig = true
  }
  
  ngAfterContentInit() {
    console.log(this.ComponentModel)
    this.showLabel = this.content.nativeElement.children.length <= 0
  }
  
}
