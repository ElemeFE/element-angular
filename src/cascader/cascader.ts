import { Component, OnInit, ElementRef } from '@angular/core'
import { ElCascaderPoprs, Option } from './cascader-props'

@Component({
  selector: 'el-cascader',
  template: `
    <span [class]="'el-cascader ' +  (menuVisible ? 'is-opened ' : '') + (disabled ? 'is-disabled ' : '')
      + (size ? 'el-cascader--' + size : '')"
      (click)="clickHandle($event)"
      (mouseenter)="inputHover = true" (mouseleave)="inputHover = false">
      <el-input [readonly]="true"
        [placeholder]="currentLabels.length ? undefined : placeholder"
        [model]="inputValue" (modelChange)="changeHandle($event)"
        [size]="size" [disabled]="disabled"
        [icon]="showClearIcon() ? 'circle-close' : 'caret-bottom'"
        [iconClass]="showClearIcon() ? 'el-cascader__clearIcon' : (menuVisible ? 'is-reverse' : '')"
        >
      </el-input>
    
      <span class="el-cascader__label" *ngIf="inputValue === ''">
        <ng-container *ngIf="allLevels">
          <ng-container *ngFor="let label of currentLabels; let i = index">
            {{ label }}
            <span *ngIf="i < currentLabels.length - 1"> / </span>
          </ng-container>
        </ng-container>
        <ng-container *ngIf="!allLevels">
          {{ currentLabels[currentLabels.length - 1] }}
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
  
  constructor(
    private el: ElementRef,
  ) {
    super()
  }
  
  clickHandle(event: MouseEvent): void {
    const element: HTMLElement = event.target as HTMLElement
    if (element.tagName !== 'INPUT' && element.tagName !== 'I') {
      return
    }
    this.menuVisible = !this.menuVisible
  }
  
  changeHandle(nextValue: any): void {
  
  }
  
  clearValue(): void {
  
  }
  
  selectHandle(step: number, index: number): any {
    this.steps[step] = this.steps[step].map((item: Option, i: number) =>
      Object.assign(item, { active: i === index }))
    // reset steps
    this.steps.length = step + 1
    const next = this.steps[step][index].children
    // go next
    if (next && Array.isArray(next)) {
      const nativeNext = next.map((item: Option) => Object.assign(item, { active: false }))
      return this.steps.push(nativeNext)
    }
    // last step
    this.menuVisible = false
  }
  
  showClearIcon(): boolean {
    return !!(this.clearable && this.inputHover && this.currentLabels.length)
  }
  
  ngOnInit(): void {
    const step1 = this.options.map((option: Option) =>
      Object.assign(option, {
        active: false,
      }))
    this.steps.push(step1)
  }
  
}
