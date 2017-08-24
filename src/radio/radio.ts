import {
  Component, Input, ViewChild, Output, EventEmitter, ElementRef, Optional, OnInit,
  AfterViewInit,
} from '@angular/core'
import { ElRadioGroup } from './radio-group'
import { Utils } from '../shared'

@Component({
  selector: 'el-radio',
  template: `
    <label class="el-radio">
      <span class="el-radio__input"
        [class.is-disabled]="disabled"
        [class.is-checked]="model === label"
        [class.is-focus]="isFocus">
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
export class ElRadio implements OnInit, AfterViewInit {
  
  @ViewChild('content') content: any
  
  @Input() disabled: boolean = false
  @Input() label: string | number = ''
  @Input('name') nativeName: string = ''
  @Input() model: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  private isFocus: boolean = false
  private showLabel: boolean = false
  private parentIsGroup: boolean = false
  
  constructor(
    @Optional() private rootGroup: ElRadioGroup,
    private el: ElementRef,
  ) {
  }
  
  changeHandle(): void {
    if (this.parentIsGroup) {
      return this.rootGroup.changeHandle(this.label)
    }
    this.modelChange.emit(this.label)
  }
  
  ngAfterViewInit(): void {
    const contentText = this.content && this.content.nativeElement.innerText
    setTimeout(() => {
      this.showLabel = !contentText || contentText.length < 1
    }, 0)
  }
  
  ngOnInit(): void {
    const nativeElement = this.el.nativeElement
    const update = () => {
      this.disabled = this.rootGroup.disabled
      this.model = this.rootGroup.model
    }
    this.parentIsGroup = Utils.isParentTag(nativeElement, 'el-radio-group')
    if (this.parentIsGroup && this.rootGroup) {
      update()
      this.rootGroup.subscriber.push(update)
    }
  }
}
