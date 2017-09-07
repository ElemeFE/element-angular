import {
  AfterViewInit,
  Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges,
} from '@angular/core'
import { ElCarouselProps } from './carousel-props'
import { carouselBtnLeftAnimation, carouselBtnRightAnimation } from './animations'

@Component({
  selector: 'el-carousel',
  animations: [carouselBtnLeftAnimation, carouselBtnRightAnimation],
  template: `
    <div class="el-carousel"
      #carousel
      [class.el-carousel--card]="type === 'card'"
      (mouseenter)="carousel.hover = true"
      (mouseleave)="carousel.hover = false">
      <div class="el-carousel__container" [ngStyle]="{height: height}">
        <button class="el-carousel__arrow el-carousel__arrow--left"
          #leftBtn
          *ngIf="arrow !== 'never'"
          [@carouselBtnLeftAnimation]="arrow === 'always' || carousel.hover"
          (mouseenter)="btnActionHandle(model - 1,'hover')"
          (click)="btnActionHandle(model - 1, 'click')">
          <i class="el-icon-arrow-left"></i>
        </button>
        <button class="el-carousel__arrow el-carousel__arrow--right"
          #rightBtn
          *ngIf="arrow !== 'never'"
          [@carouselBtnRightAnimation]="arrow === 'always' || carousel.hover"
          (mouseenter)="btnActionHandle(model + 1, 'hover')"
          (click)="btnActionHandle(model + 1, 'click')">
          <i class="el-icon-arrow-right"></i>
        </button>
        <ng-content></ng-content>
      </div>
      <ul class="el-carousel__indicators" *ngIf="indicatorPosition !== 'none'"
        [class.el-carousel__indicators--labels]="hasLabel"
        [class.el-carousel__indicators--outside]="indicatorPosition === 'outside' || type === 'card'">
        <li *ngFor="let item of items; let i = index"
          class="el-carousel__indicator"
          [class.is-active]="i === model"
          (mouseenter)="indicatorActionHandle(i, 'hover')"
          (click)="indicatorActionHandle(i, 'click')">
          <button class="el-carousel__button">
            <span *ngIf="hasLabel">{{item}}</span>
          </button>
        </li>
      </ul>
    </div>
  `,
})
export class ElCarousel extends ElCarouselProps implements
  OnInit, AfterViewInit, OnChanges {
  
  subscriber: Function[] = []
  items: any[] = []
  private hasLabel: boolean = false
  private itemLength: number
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    super()
  }
  
  btnActionHandle(nextValue: number, eventType: string): void {
    if (this.trigger !== eventType) return
    this.setActiveItem(nextValue)
  }
  
  indicatorActionHandle(nextValue: number, eventType: string): void {
    if (this.indicatorTrigger !== eventType) return
    this.setActiveItem(nextValue)
  }
  
  setActiveItem(index: number): void {
    const nextValue = index >= this.itemLength ? 0 : index < 0 ? this.itemLength - 1 : index
    this.model = nextValue
    this.subscriber.forEach(func => func())
    this.modelChange.emit(this.model)
  }
  
  ngOnInit(): void {
    const children = this.el.nativeElement.querySelectorAll('el-carousel-item')
    if (!children || !children.length) {
      return console.warn('steps components required children')
    }
    children.forEach((el: HTMLElement, index: number) => {
      this.renderer.setAttribute(el, 'el-index', String(index))
    })
    this.itemLength = children.length
  }
  
  ngAfterViewInit(): void {
    // all labels are validated
    this.hasLabel = !this.items.some(item => !item)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    this.setActiveItem(changes.model.currentValue)
  }

}
