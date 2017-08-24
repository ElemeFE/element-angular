import { Component, Input, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core'

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
      <span class="el-radio__label">
        <span *ngIf="showLabel">{{label}}</span>
        <span *ngIf="!showLabel" #content>
          <ng-content></ng-content>
        </span>
      </span>
    </label>
  `,
})
export class ElRadio implements AfterViewInit {
  
  @ViewChild('content') content: any
  
  @Input() disabled: boolean = false
  @Input() label: string | number = ''
  @Input('name') nativeName: string = ''
  @Input() model: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  private isFocus: boolean = false
  private showLabel: boolean = false
  private isGroup: boolean = false
  private modelChangeFromGroup: Function
  
  constructor(
  ) {
  }
  
  classes(): any {
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
  
  _fromParentSet(configFromGroup: any): void {
    this.isGroup = true
    this.disabled = configFromGroup.disabled
    this.modelChangeFromGroup = configFromGroup.modelChange
  }
  
  _fromParentSetOnlyModel(model: any): void {
    this.model = model
  }
  
  ngAfterViewInit(): void {
    const contentText = this.content && this.content.nativeElement.innerText
    setTimeout(() => {
      this.showLabel = !contentText || contentText.length < 1
    }, 0)
  }
  
}
