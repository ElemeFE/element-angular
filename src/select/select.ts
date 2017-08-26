import { Component, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core'
import { ElSelectPoprs } from './select-props'

@Component({
  selector: 'el-select',
  template: `
    <div class="el-select" (click)="toggleHandle($event)">
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
export class ElSelect extends ElSelectPoprs implements OnInit, OnDestroy {
  
  selfWidth: string
  subscriber: Function[] = []
  
  private dropdownActive: boolean = false
  private selectedLabel: string | number
  private iconClass: string = 'caret-top'
  private globalListener: Function
  
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    super()
  }
  
  mouseHandle(isEnter: boolean = false): void {
    if (!this.clearable || !this.model) return
    this.iconClass = `${isEnter ? 'circle-close is-show-close' : 'caret-top'}`
  }
  
  toggleHandle(event?: Event): void {
    if (this.disabled) return
    event && event.stopPropagation()
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
    this.dropdownActive && this.toggleHandle()
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
    this.globalListener = this.renderer.listen('document', 'click', event => {
      this.dropdownActive && this.toggleHandle()
    })
  }
  
  ngOnDestroy(): void {
    this.globalListener && this.globalListener()
  }
  
}
