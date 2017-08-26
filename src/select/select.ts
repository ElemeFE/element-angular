import { Component, OnInit, ElementRef } from '@angular/core'
import { ElSelectPoprs } from './select-props'

@Component({
  selector: 'el-select',
  template: `
    <div class="el-select" (click)="toggleHandle()">
      <el-input [model]="selectedLabel" [placeholder]="placeholder" [icon]="iconClass"
        [name]="name" [size]="size" [disabled]="disabled" [readonly]="!filterable || multiple"
        (mouseenter)="mouseHandle(true)" (mouseleave)="mouseHandle(false)"
        (icon-click)="clearSelected($event)">
      </el-input>
      <ng-container>
        <el-select-dropdown [isActived]="dropdownActive">
          <ul class="el-scrollbar__view el-select-dropdown__list">
            <ng-content></ng-content>
          </ul>
        </el-select-dropdown>
      </ng-container>
    </div>
  `,
})
export class ElSelect extends ElSelectPoprs implements OnInit {
  
  selfWidth: string
  subscriber: Function[] = []
  
  private dropdownActive: boolean = false
  private selectedLabel: string | number
  private iconClass: string = 'caret-top'
  
  constructor(
    private el: ElementRef,
  ) {
    super()
  }
  
  mouseHandle(isEnter: boolean = false): void {
    if (!this.clearable || !this.model) return
    this.iconClass = `${isEnter ? 'circle-close is-show-close' : 'caret-top'}`
  }
  
  toggleHandle(): void {
    if (this.disabled) return
    this.dropdownActive = !this.dropdownActive
    this.iconClass = !this.clearable ? (this.dropdownActive ? 'is-reverse' : '') : this.iconClass
  }
  
  clearSelected(event: Event): void {
    event.stopPropagation()
    // reset icon
    this.mouseHandle(false)
    // reset selected label
    this.changeLabel(null, null)
    // close dropdown menu
    this.dropdownActive = false
  }
  
  changeLabel(nextLabel: string | number, nextValue?: any): void {
    // only update label
    this.selectedLabel = nextLabel
    
    if (!nextValue) return
    this.model = nextValue
    this.modelChange.emit(nextValue)
    this.subscriber.forEach(sub => sub())
  }
  
  ngOnInit(): void {
    setTimeout(() => {
      this.selfWidth = this.el.nativeElement.getBoundingClientRect().width
    }, 0)
  }
  
}
