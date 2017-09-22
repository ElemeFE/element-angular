import {
  Component, Input, ViewChild, Output, EventEmitter, Optional,
  ElementRef, AfterViewInit,
} from '@angular/core'
import { ElRadioGroup } from './radio-group'
import { isParentTag, removeNgTag } from '../shared/utils'

@Component({
  selector: 'el-radio-button',
  template: `
    <label [class]="'el-radio-button' + (size ? ' el-radio-button--' + size : '')"
      [class.is-disabled]="disabled"
      [class.is-active]="model === label">
      <input class="el-radio-button__orig-radio" type="radio"
        [value]="label" [name]="nativeName" [disabled]="disabled"
        [ngModel]="model" (ngModelChange)="changeHandle()">
      <span class="el-radio-button__inner" [ngStyle]="model === label && activeStyles">
        <span *ngIf="showLabel">{{label}}</span>
        <span *ngIf="!showLabel" #content>
          <ng-content></ng-content>
        </span>
      </span>
    </label>
  `,
})
export class ElRadioButton implements AfterViewInit {
  
  @ViewChild('content') content: any
  
  @Input() disabled: boolean = false
  @Input() label: string | number
  @Input('name') nativeName: string = ''
  @Input() model: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  size: string
  showLabel: boolean = false
  parentIsGroup: boolean = false
  activeStyles: any
  
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
      this.size = this.rootGroup.buttonSize
      this.activeStyles =  {
        backgroundColor: this.rootGroup.fillColor || '',
        borderColor: this.rootGroup.fillColor || '',
        boxShadow: this.rootGroup.fillColor ? `-1px 0 0 0 ${this.rootGroup.fillColor}` : '',
        color: this.rootGroup.textColor || '',
      }
    }
    this.parentIsGroup = isParentTag(nativeElement, 'el-radio-group')
    removeNgTag(nativeElement)
    
    if (this.parentIsGroup && this.rootGroup) {
      update()
      this.rootGroup.subscriber.push(update)
    }
  }
  
}
