import { Component, OnInit, ElementRef } from '@angular/core'
import { ElSelectPoprs } from './select-props'

@Component({
  selector: 'el-select',
  template: `
    <div class="el-select" (click)="toggleHandle()">
      <el-input [model]="selectedLabel" [placeholder]="placeholder"
        [name]="name" [size]="size" [disabled]="disabled" [readonly]="!filterable || multiple"
        [icon]="iconClass">
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
  
  toggleHandle(): void {
    this.dropdownActive = !this.dropdownActive
    this.iconClass = `caret-top ${this.dropdownActive ? 'is-reverse' : ''}`
  }
  
  changeLabel(nextLabel: string | number, nextValue: any): void {
    this.selectedLabel = nextLabel
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
