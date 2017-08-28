import { Component, ElementRef, OnInit, AfterContentInit, ViewChild, Renderer2 } from '@angular/core'
import { ElRateProps } from './rate.props'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
type RateMapItem = { color: string, class: string }
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
    <div class="el-rate">
      <span *ngFor="let show of scores; let i = index" class="el-rate__item"
        [ngStyle]="{cursor: disabled ? 'auto' : 'pointer'}"
        (mousemove)="hoverToggle(i)"
        (mouseleave)="hoverToggle(i, false)"
        (click)="selectValue(i)">
        <i class="el-rate__icon" [style]="updateStyle(i)"
          [class.el-icon-star-on]="true"
          [class.hover]="i"
          #rateIcon>
          <!--<i class="el-rate__decimal" [class]="decimalIconClass"-->
            <!--*ngIf="showDecimalIcon(item)"-->
            <!--[style]="decimalStyle" ></i>-->
        </i>
      </span>
      <span *ngIf="showText" class="el-rate__text" [ngStyle]="{ color: textColor }">{{ text }}</span>
    </div>
  `,
})
export class ElRate extends ElRateProps implements OnInit, AfterContentInit {
  
  private scores: boolean[] = []
  private rateMap: RateMap
  private backupModel: number
  @ViewChild('rateIcon') rateIcon: ElementRef
  
  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    super()
  }
  
  // hover todo
  hoverToggle(index?: number, reset: boolean = false): void {
    if (reset) {
      this.model = this.backupModel
      this.renderer.removeClass(this.rateIcon.nativeElement, 'hover')
    } else {
      this.model = index
      this.renderer.addClass(this.rateIcon.nativeElement, 'hover')
    }
  }
  
  selectValue(index: number): void {
  
  }
  
  classes(index: number): string {
    return ''
  }
  
  updateStyle(index: number): SafeStyle {
    const voidColor = this.disabled ? this.rateMap.disabled.color : this.rateMap.void.color
    const activeItem = this.findCurrentType(index, this.rateMap)
    const styles = `color: ${index <= this.model ? activeItem.color : voidColor};`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  findCurrentType(index: number, rateMap: RateMap): RateMapItem {
    if (index <= this.lowThreshold) return rateMap.low
    if (index >= this.highThreshold) return rateMap.high
    return rateMap.medium
  }
  
  ngOnInit(): void {
    this.scores = new Array(this.max)
      .fill(false)
      .map((v, i) => i <= this.model)
    this.backupModel = this.model
    
    this.rateMap = {
      low: { color: this.colors[0], class: this.iconClasses[0] },
      medium: { color: this.colors[1], class: this.iconClasses[1] },
      high: { color: this.colors[2], class: this.iconClasses[2] },
      void: { color: this.voidColor, class: this.voidIconClass },
      disabled: { color: this.disabledVoidColor, class: this.disabledVoidIconClass },
    }
  }
  
  ngAfterContentInit(): void {
  }
}
