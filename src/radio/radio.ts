import { Component, Input, ViewChild, AfterContentInit, Output, EventEmitter } from '@angular/core'
import { ElRadioConfig } from './radio-config'

export type Label = string | boolean | number
export type ClassesType = { [key: string]: any }
export type GroupConfigType = {
  buttonSize?: string,
  fillColor?: string,
  textColor?: string,
  disabled: boolean,
}

@Component({
  selector: 'el-radio',
  template: `
    <label class="el-radio">
      <span class="el-radio__input" [ngClass]="classes()">
        <span class="el-radio__inner"></span>
        <input class="el-radio__original" type="radio"
          [value]="label" [name]="nativeName" [disabled]="disabled"
          (focus)="isFocus = true" (blur)="isFocus = false" (change)="changeHandle($event)">
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
  @Input('model') model: any
  
  @Output('model') change = new EventEmitter<any>()
  
  constructor(private config: ElRadioConfig) {
    this.disabled = config.disabled
    this.label = config.label
    this.nativeName = config.nativeName
  }
  
  private radioModel: any
  private isFocus: boolean = false
  private showLabel: boolean = false
  
  private isGroup: boolean = false
  
  classes(): ClassesType {
    return {
      'is-disabled': this.disabled,
      'is-checked': this.model === this.label,
      'is-focus': this.isFocus,
    }
  }
  
  changeHandle($event: Event): void {
    this.model = this.label
    this.change.emit(this.label)
  }
  
  _fromParentSet(configFromGroup: GroupConfigType): void {
    this.isGroup = true
    this.disabled = configFromGroup.disabled
  }
  
  ngAfterContentInit() {
    this.showLabel = this.content.nativeElement.children.length <= 0
  }
  
}
