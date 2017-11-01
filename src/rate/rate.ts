import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core'
import { ElRateProps } from './rate.props'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
export type RateMapItem = { color: string, class: string }
export type RateMap = {
  low: RateMapItem,
  high: RateMapItem,
  medium: RateMapItem,
  void: RateMapItem,
  disabled: RateMapItem,
}

@Component({
  selector: 'el-rate',
  template: `
    <div class="el-rate" role="slider">
      <span *ngFor="let s of scores; let i = index" class="el-rate__item"
        [ngStyle]="{cursor: disabled ? 'auto' : 'pointer'}"
        (mousemove)="hoverToggle($event, i)"
        (mouseleave)="hoverToggle($event, i, true)"
        (click)="selectValue(i)">
        <i class="el-rate__icon" [style]="makeIconStyles(i)"
          [class]="makeIconClasses(i)"
          [class.hover]="i"
          #rateIcon></i>
      </span>
      <span *ngIf="showText" class="el-rate__text" [ngStyle]="{ color: textColor }">
        {{ texts[model] }}
      </span>
    </div>
  `,
})
export class ElRate extends ElRateProps implements OnInit {
  
  @ViewChild('rateIcon') rateIcon: ElementRef
  scores: boolean[] = []
  rateMap: RateMap
  backupModel: number
  
  constructor(
    private sanitizer: DomSanitizer,
    private renderer: Renderer2
  ) {
    super()
  }
  
  // hover todo
  hoverToggle({ srcElement }: Event, index?: number, reset: boolean = false): void {
    if (this.disabled) return
    const iconElement: Element = srcElement.tagName === 'I' ? srcElement : srcElement.children[0]
    if (reset) {
      this.model = this.backupModel
      this.renderer.removeClass(iconElement, 'hover')
    } else {
      this.model = index
      this.renderer.addClass(iconElement, 'hover')
    }
  }
  
  selectValue(index: number): void {
    if (this.disabled) return
    this.model = this.backupModel = index
    this.modelChange.emit(index)
  }
  
  makeIconClasses(index: number): string {
    const voidClass = this.disabled ? this.rateMap.disabled.class : this.rateMap.void.class
    const activeItem = this.findCurrentType(this.model, this.rateMap)
    const classes = index <= this.model ? activeItem.class : voidClass
    return 'el-rate__icon ' + classes
  }
  
  makeIconStyles(index: number): SafeStyle {
    const voidColor = this.disabled ? this.rateMap.disabled.color : this.rateMap.void.color
    const activeItem = this.findCurrentType(this.model, this.rateMap)
    const styles = `color: ${index <= this.model ? activeItem.color : voidColor};`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  findCurrentType(index: number, rateMap: RateMap): RateMapItem {
    if (index <= this.lowThreshold) return rateMap.low
    if (index >= this.highThreshold) return rateMap.high
    return rateMap.medium
  }
  
  ngOnInit(): void {
    this.scores = new Array(this.max).fill('')
    this.backupModel = this.model
    
    this.rateMap = {
      low: { color: this.colors[0], class: this.iconClasses[0] },
      medium: { color: this.colors[1], class: this.iconClasses[1] },
      high: { color: this.colors[2], class: this.iconClasses[2] },
      void: { color: this.voidColor, class: this.voidIconClass },
      disabled: { color: this.disabledVoidColor, class: this.disabledVoidIconClass },
    }
  }
  
}
