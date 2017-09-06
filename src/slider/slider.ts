import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { ElSliderProps } from './slider.props'

@Component({
  selector: 'el-slider',
  template: `
    <div class="el-slider"
      [class.is-vertical]="vertical" [class.el-slider--with-input]="showInput">
      <div class="el-slider__runway"
        [class.show-input]="showInput" [class.disabled]="disabled"
        [style]="makeRunwayStyle()"
        (click)="onSliderClick($event)"
        #runway>
        <div class="el-slider__bar" [style]="makeBarStyle()"></div>
        <el-slider-button [vertical]="vertical"
          [model]="model"
          (modelChange)="moveChange($event)"
          [min]="min" [max]="max"
          [format-tooltip]="formatTooltip"
          [disabled]="!showTooltip">
        </el-slider-button>
        <ng-container  *ngIf="showStops">
          <div class="el-slider__stop" *ngFor="let item of stops"
            [style]="makeStopsStyle(item)">
          </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class ElSlider extends ElSliderProps implements OnInit, AfterViewInit {
  
  @ViewChild('runway') runwayElement: ElementRef
  size: number
  
  private start: number = 0
  private isDragging: boolean = false
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
    super()
  }
  
  makeRunwayStyle(): SafeStyle {
    const styles = this.vertical ? `height: ${this.height}px;` : ''
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  makeBarStyle(): SafeStyle {
    const val: number = (this.model - this.min) * 100 / (this.max - this.min)
    const styles = this.vertical ? `height: ${val}%; bottom: ${this.start}%;`
      : `width: ${val}%; left: ${this.start}%;`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  makeStopsStyle(item: string): SafeStyle {
    const styles = `${this.vertical ? 'bottom' : 'left'}: ${item}%;`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  resetSize(): void {
    if (!this.runwayElement) return
    this.size = this.runwayElement.nativeElement[`client${ this.vertical ? 'Height' : 'Width' }`]
  }
  
  onSliderClick(event: MouseEvent): void {
    if (this.disabled || this.isDragging) return
    this.resetSize()
    const val: number = this.vertical ? event.clientY : event.clientX
    const { left, bottom } = this.runwayElement.nativeElement.getBoundingClientRect()
    const offset: number = val - (this.vertical ? bottom : left)
    // update value
    this.model = Math.round((offset / this.size) * (this.max - this.min)) + this.min
    this.makeBarStyle()
  }
  
  moveChange(nextValue: number): void {
    this.model = nextValue
    this.modelChange.emit(nextValue)
  }
  
  ngOnInit(): void {
    if (!this.model) {
      this.model = this.min
    }
  }
  
  ngAfterViewInit(): void {
    this.resetSize()
  }
  
}
