import {
  Component, Input, Optional, Renderer2,
  Output, EventEmitter, OnInit, OnChanges, SimpleChanges,
} from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { fadeAnimation } from '../shared/animation'
import { ElSlider } from './slider'

@Component({
  selector: 'el-slider-button',
  styles: [`
    .popper-center {
      position: absolute;
      left: 15px;
      top: -35px;
      display: none;
      transform: translateX(-50%);
    }
    .isVertical { margin-left: 2px; }
  `],
  animations: [fadeAnimation],
  template: `
    <div class="el-slider__button-wrapper"
      [class.hover]="hovering" [class.dragging]="dragging"
      [class.isVertical]="vertical"
      [style]="wrapperStyles"
      (mouseenter)="togglePopper(true)"
      (mouseleave)="togglePopper(false)"
      (mousedown)="buttonDownHandle($event)">
      <div class="el-slider__button el-tooltip" #wrapper
        (mouseenter)="popperMouseHandle(true)" (mouseleave)="popperMouseHandle(false)"></div>
      <div class="el-tooltip__popper is-dark popper-center" x-placement="top"
        [@fadeAnimation]="!showPopper">
        <div x-arrow class="popper__arrow" style="left: 50%; transform: translateX(-50%);"></div>
        <span>{{ formatValue() }}</span>
      </div>
    </div>
  `,
})
export class ElSliderButton implements OnInit, OnChanges {
  
  @Input() disabled: boolean = false
  @Input() model: number = 0
  @Input() vertical: boolean = false
  @Input('format-tooltip') formatTooltip: Function
  @Input() min: number = 0
  @Input() max: number = 100
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  hovering: boolean = false
  dragging: boolean = false
  popper: boolean = true
  wrapperStyles: SafeStyle
  
  startY: number
  startX: number
  currentY: number
  currentX: number
  startPosition: number = 0
  position: number
  
  globalListenFunc: Function[] = []
  showPopper: boolean = false
  
  constructor(
    @Optional() private root: ElSlider,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
  ) {}
  
  popperMouseHandle(t: boolean): void {
    if (!this.dragging && !t) {
      this.showPopper = false
    }
    if (t && !this.disabled) {
      this.showPopper = true
    }
  }
  
  getCurrentPosition(): number {
    return (this.model - this.min) / (this.max - this.min) * 100
  }
  
  updateWrapperStyle(): void {
    const currentPosition: number = this.getCurrentPosition()
    const styles: string = `${this.vertical ? 'bottom' : 'left'}: ${currentPosition}%`
    this.wrapperStyles = this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  formatValue(): any {
    return this.formatTooltip ? this.formatTooltip(this.model) : this.model
  }
  
  togglePopper(t: boolean): void {
    this.hovering = t
    this.popper = t
  }
  
  buttonDownHandle(event: Event): void {
    event.preventDefault()
    this.onDragStart(event)
    this.globalListenFunc.push(...[
      this.renderer.listen('window', 'mousemove', (e: Event) => {
        this.draggingHandle(e)
      }),
      this.renderer.listen('window', 'mouseup', () => {
        this.dragEndHandle()
      })
    ])
    
  }
  
  onDragStart(event: Event): void {
    // show tooltip
    this.popperMouseHandle(true)
    this.dragging = true
    if (this.vertical) {
      this.startY = (<any>event).clientY
    } else {
      this.startX = (<any>event).clientX
    }
    this.startPosition = this.getCurrentPosition()
  }
  
  draggingHandle(event: Event): void {
    if (!this.dragging) return
    this.togglePopper(true)
    this.root.resetSize()
    let diff = 0
    if (this.vertical) {
      this.currentY = (<any>event).clientY
      diff = (this.startY - this.currentY) / this.root.size * 100
    } else {
      this.currentX = (<any>event).clientX
      diff = (this.currentX - this.startX) / this.root.size * 100
    }
    this.position = this.startPosition + diff
    this.setPosition(this.position)
  }
  
  dragEndHandle(): void {
    if (!this.dragging) return
    // hide tooltip
    this.showPopper = false
    const timer: any = setTimeout(() => {
      this.dragging = false
      this.togglePopper(false)
      this.setPosition(this.position)
      clearTimeout(timer)
    }, 0)
    this.globalListenFunc.forEach(func => func())
    this.globalListenFunc = []
  }
  
  setPosition(next: number): void {
    if (next === null) return
    const checkedNext: number = next < 0 ? 0 : next > 100 ? 100 : next
    const val: number = checkedNext * (this.max - this.min) * 0.01 + this.min
    if (Number.isNaN(val)) return
    this.model = Math.round(val)
    this.modelChange.emit(this.model)
    this.updateWrapperStyle()
  }
  
  ngOnInit(): void {
    this.updateWrapperStyle()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    // first change
    // if (!changes.model.previousValue) return
    this.model = changes.model.currentValue
    this.updateWrapperStyle()
  }
  
}


