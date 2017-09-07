import { Component, Input } from '@angular/core'
import { ElCarouselProps } from './carousel-props'
import { fadeAnimation } from '../shared/animation'

@Component({
  selector: 'el-carousel',
  animations: [fadeAnimation],
  template: `
    <div class="el-carousel"
      [class.el-carousel--card]="type === 'card'"
      (mouseenter)="mouseHandle(true)"
      (mouseleave)="mouseHandle(false)">
      <div class="el-carousel__container" [ngStyle]="{height: height}">
        <button class="el-carousel__arrow el-carousel__arrow--left"
          *ngIf="arrow !== 'never'"
          [@fadeAnimation]="arrow === 'always' || hover"
          (mouseenter)="btnMouseHandle(true, 'left')" (mouseleave)="btnMouseHandle(false)"
          (click)="btnClickHandle(-1)">
          <i class="el-icon-arrow-left"></i>
        </button>
        <button class="el-carousel__arrow el-carousel__arrow--right"
          *ngIf="arrow !== 'never'"
          [@fadeAnimation]="arrow === 'always' || hover"
          (mouseenter)="btnMouseHandle(true, 'left')" (mouseleave)="btnMouseHandle(false)"
          (click)="btnClickHandle(1)">
          <i class="el-icon-arrow-right"></i>
        </button>
        <ng-content></ng-content>
      </div>
      <ul class="el-carousel__indicators" *ngIf="indicatorPosition !== 'none'"
        [class.el-carousel__indicators--labels]="hasLabel"
        [class.el-carousel__indicators--outside]="indicatorPosition === 'outside' || type === 'card'">
        <li *ngFor="let item of items; let i = index"
          class="el-carousel__indicator"
          [class.is-active]="i === activeIndex"
          (mouseenter)="btnClickHandle(i)" (click)="btnClickHandle(i)">
          <button class="el-carousel__button">
            <span *ngIf="hasLabel">{{item.label}}</span>
          </button>
        </li>
      </ul>
    </div>
  `,
})
export class ElCarousel extends ElCarouselProps {
  
  private hasLabel: boolean = true
  
  constructor() {
    super()
  }
  
  mouseHandle(t: boolean): void {
  
  }
  
  btnMouseHandle(t: boolean, isLeft: boolean): void {
  
  }
  
  btnClickHandle(step: number): void {
  
  }
  
}
