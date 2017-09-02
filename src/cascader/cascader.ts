import { Component, OnInit } from '@angular/core'
import { ElCascaderPoprs, Option } from './cascader-props'

@Component({
  selector: 'el-cascader',
  template: `
    <span [class]="'el-cascader ' +  (menuVisible ? 'is-opened ' : '') + (disabled ? 'is-disabled ' : '')
      + (size ? 'el-cascader--' + size : '')"
      (click)="clickHandle($event)"
      (mouseenter)="inputHover = true" (mouseleave)="inputHover = false">
      <el-input [readonly]="true"
        [placeholder]="currentLabels.length ? '' : placeholder"
        [model]="inputValue"
        [size]="size" [disabled]="disabled"
        [icon]="showClearIcon() ? 'circle-close' : 'caret-bottom'"
        [iconClass]="showClearIcon() ? 'el-cascader__clearIcon' : (menuVisible ? 'is-reverse' : '')"
        (icon-click)="clearValue($event)">
      </el-input>
    
      <span class="el-cascader__label" *ngIf="currentLabels.length">
        <ng-container *ngIf="allLevels">
          <ng-container *ngFor="let item of currentLabels; let i = index">
            {{ item.label }}
            <span *ngIf="i < currentLabels.length - 1"> / </span>
          </ng-container>
        </ng-container>
        <ng-container *ngIf="!allLevels">
          {{ currentLabels[currentLabels.length - 1].label }}
        </ng-container>
      </span>
      <el-cascader-menu></el-cascader-menu>
  </span>
  `,
})
export class ElCascader extends ElCascaderPoprs implements OnInit {
  
  steps: any[] = []
  menuVisible: boolean = false
  private inputHover: boolean = false
  private currentLabels: Option[] = []
  
  constructor() {
    super()
  }
  
  clickHandle(event: MouseEvent): void {
    const element: HTMLElement = event.target as HTMLElement
    const isSelfTrigger = ['SPAN', 'I', 'INPUT'].find(v => v === element.tagName)
    if (!isSelfTrigger) return
    this.menuVisible = !this.menuVisible
  }
  
  changeLabels(): void {
    const nextValue: Option[] = []
    this.steps.forEach((items: Option[]) => {
      const steps: Option[] = items.filter((item: Option) => item.active)
      nextValue.push(steps[0])
    })
    this.currentLabels = nextValue
    this.modelChange.emit({
      value: nextValue[nextValue.length - 1].value,
      path: nextValue.map((item: Option) => item.value),
    })
  }
  
  clearValue(event?: Event): void {
    event && event.stopPropagation()
    this.currentLabels = []
    const step1 = this.options.map((option: Option) =>
      Object.assign(option, {
        active: false,
      }))
    this.steps = [step1]
    this.menuVisible = false
  }
  
  selectHandle(step: number, index: number): any {
    if (this.steps[step][index].disabled) return
    this.steps[step] = this.steps[step].map((item: Option, i: number) =>
      Object.assign(item, { active: i === index }))
    // reset steps
    this.steps.length = step + 1
    const next = this.steps[step][index].children
    
    // go next
    if (next && Array.isArray(next)) {
      // change on select (props)
      this.changeOnSelect && this.changeLabels()
      const nativeNext = next.map((item: Option) => Object.assign(item, { active: false }))
      return this.steps.push(nativeNext)
    }
    // last step
    this.changeLabels()
    this.menuVisible = false
  }
  
  showClearIcon(): boolean {
    return !!(this.clearable && this.inputHover && this.currentLabels.length)
  }
  
  ngOnInit(): void {
    this.clearValue()
  }
  
}
