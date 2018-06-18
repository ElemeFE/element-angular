import {
  Component, OnInit, ElementRef, Renderer2, OnDestroy, OnChanges, SimpleChanges, forwardRef, ViewChild, AfterViewInit,
} from '@angular/core'
import { ElSelectPoprs } from './select-props'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { WindowWrapper } from '../shared/services'

export type SelectOption = {
  label?: string | number,
  value: any,
}

@Component({
  selector: 'el-select',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ElSelect),
    multi: true
  }],
  styles: [`
    .el-select-dropdown__list { overflow: hidden; }
    .el-select__tags__padding { padding-right: 30px; }
  `],
  template: `
    <div class="el-select" (click)="toggleHandle($event)">
      <div class="el-select__tags el-select__tags__padding" *ngIf="multiple && model && model.length" #tags>
        <el-tag *ngFor="let tag of multipleLabels; let i = index"
          [closable]="!elDisabled"
          [size]="size"
          (close)="$event.stopPropagation();changeLabel(tag, model[i])"
          type="info">{{tag}}</el-tag>
      </div>
      
      <el-input iconClass="el-select__caret" #input
        [model]="selectedLabel"
        [placeholder]="multiple ? multiplePlaceholder : placeholder"
        [icon]="iconClass"
        [name]="name"
        [size]="size"
        [elDisabled]="elDisabled" [readonly]="true"
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
export class ElSelect extends ElSelectPoprs implements OnInit, OnDestroy, OnChanges, AfterViewInit, ControlValueAccessor {
  
  @ViewChild('tags') tags: any
  @ViewChild('input') input: any
  selfWidth: string
  subscriber: Function[] = []
  multipleLabels: Array<string | number> = []
  multiplePlaceholder: string = this.placeholder
  
  dropdownActive: boolean = false
  selectedLabel: string | number
  iconClass: string = 'arrow-up'
  globalListener: Function
  
  private selectOptions: SelectOption[] = []
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private window: WindowWrapper,
  ) {
    super()
  }
  
  mouseHandle(isEnter: boolean = false): void {
    this.clearable = this.clearable && !this.multiple
    if (!this.clearable || !this.model) return
    this.iconClass = `${isEnter ? 'circle-close is-reverse' : 'arrow-up'}`
  }
  
  toggleHandle(event?: Event): void {
    this.clearable = this.clearable && !this.multiple
    if (this.elDisabled) return
    event && event.stopPropagation()
    this.dropdownActive = !this.dropdownActive
    const nextClass = 'arrow-up' + (this.dropdownActive ? ' is-reverse' : '')
    this.iconClass = !this.clearable ? nextClass : this.iconClass
  }
  
  clearSelected(event: Event): void {
    this.clearable = this.clearable && !this.multiple
    if (!this.clearable) return
    event.stopPropagation()
    // reset icon
    this.mouseHandle(false)
    // reset selected label
    this.changeLabel(null, null)
    
    // reset model
    this.model = null
    this.modelChange.emit(this.model)
    this.controlChange(this.model)
    this.subscriber.forEach(sub => sub())
    
    // close dropdown menu
    this.dropdownActive = false
  }
  
  changeLabel(nextLabel: string | number, nextValue?: any): void {
    this.dropdownActive && this.toggleHandle()
    // only update label
    this.selectedLabel = this.multiple ? '' : nextLabel
    if (!nextValue || this.model === nextValue) return
  
    if (this.multiple) {
      this.updateValueWithMultipleMode(nextLabel, nextValue)
      this.updateLayoutWithMultipleMode()
    } else {
      this.model = nextValue
    }
    this.modelChange.emit(this.model)
    this.controlChange(this.model)
    this.subscriber.forEach(sub => sub())
  }
  
  appendOptions(item: SelectOption): void {
    this.selectOptions.push(item)
  }
  
  ngOnInit(): void {
    const timer: number = window.setTimeout(() => {
      this.selfWidth = this.el.nativeElement.getBoundingClientRect().width
      clearTimeout(timer)
    }, 0)
    this.globalListener = this.renderer.listen('document', 'click', () => {
      this.dropdownActive && this.toggleHandle()
    })
    
    this.updatePlaceholderWithMultipleMode()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    if (changes.model.isFirstChange()) return
    
    // reset model
    if (!changes.model.currentValue) {
      this.selectedLabel = changes.model.currentValue
      this.model = changes.model.currentValue
      this.modelChange.emit(changes.model.currentValue)
      this.controlChange(this.model)
    }
    this.subscriber.forEach(sub => sub())
  }
  
  ngOnDestroy(): void {
    this.globalListener && this.globalListener()
  }
  
  ngAfterViewInit(): void {
    const timer: number = this.window.setTimeout(() => {
      this.initModelWithMultipleMode()
      this.window.clearTimeout(timer)
    }, 0)
  }
  
  writeValue(value: any): void {
    this.model = value
    this.initModelWithMultipleMode()
    this.subscriber.forEach(sub => sub())
  }
  
  registerOnChange(fn: Function): void {
    this.controlChange = fn
  }
  
  registerOnTouched(fn: Function): void {
    this.controlTouch = fn
  }
  
  private controlChange: Function = () => {}
  
  private controlTouch: Function = () => {}
  
  private updateLayoutWithMultipleMode(): void {
    const updateHandle = () => {
      if (!this.tags) return
      const children = this.tags.nativeElement && this.tags.nativeElement.children
      const inputEl: Element = this.input.el.nativeElement
      if (!children || !children.length || !inputEl) return
      const inputWidth: number = inputEl.getBoundingClientRect().width
  
      const unit: number = inputWidth - 34
      let row = 1
      Array.from(children).reduce((count: number, el: any) => {
        const currentWidth: number = el.getBoundingClientRect().width || 80
          if (count + currentWidth < unit) return count + currentWidth
          // add a row
          row ++
          return currentWidth
        }, 0)
      const el = inputEl.querySelector('.el-input__inner')
      this.renderer.setStyle(el, 'height', `${Math.ceil(row) * 40}px`)
    }
    const timer: number = this.window.setTimeout(() => {
      updateHandle()
      this.window.clearTimeout(timer)
    }, 0)
  }
  
  private updateValueWithMultipleMode(nextLabel: string | number, nextValue?: any): void {
    const model: any[] = Array.isArray(this.model)
      ? (this.model.indexOf(nextValue) > -1 ? this.model.filter(v => v !== nextValue) : this.model.concat(nextValue))
      : [nextValue]
    this.model = model.filter(r => r !== undefined)
    
    this.multipleLabels = !nextLabel || this.multipleLabels.indexOf(nextLabel) > -1
    ? this.multipleLabels.filter(v => v !== nextLabel)
    : this.multipleLabels.concat(nextLabel)
  
    this.updatePlaceholderWithMultipleMode()
  }
  
  private updatePlaceholderWithMultipleMode(): void {
    if (!this.multiple) return
    this.multiplePlaceholder = this.model && this.model.length ? '' : this.placeholder
  }
  
  private initModelWithMultipleMode(): void {
    if (!this.model || !this.multiple || !this.selectOptions.length) return
    if (!Array.isArray(this.model)) this.model = [this.model]
    
    this.multipleLabels = this.model
    .map((item: any) => {
      const option: SelectOption = this.selectOptions.find(option => option.value === item)
      if (option && option.label) return option.label
      return null
    })
    .filter((r: any) => !!r)
    this.updateLayoutWithMultipleMode()
  }
  
}
