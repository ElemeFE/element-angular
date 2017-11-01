import { Component, Input, OnInit, Optional, ElementRef, ViewChild } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { removeNgTag } from '../shared/utils'
import { ElSteps } from './steps'

@Component({
  selector: 'el-step',
  template: `
    <div [class]="'el-step ' + (!root.simple ? 'is-' + root.direction : '')"
      [class.is-simple]="root.simple"
      [class.is-center]="root.alignCenter && !root.simple && !isVertical()"
      [class.is-flex]="isLast() && !root.alignCenter && !root.simple"
      [style]="makeStepStyles()">
      <div [class]="'el-step__head is-' + currentStatus()">
        <div class="el-step__line" [ngStyle]="{
          'margin-right': isLast() ? '' : root.offset + 'px',
          'display': isLast() ? 'none' : 'block'}">
          <i class="el-step__line-inner" [style]="makeLineStyles()"></i>
        </div>

        <span [class]="'el-step__icon ' + (icon ? 'is-icon' : 'is-text')">
          <ng-container *ngIf="currentStatus() !== 'success' && currentStatus() !== 'error'">
            <i *ngIf="icon" [class]="'el-step__icon-inner el-icon-' + icon"></i>
            <div *ngIf="!icon && !root.simple" class="el-step__icon-inner" >{{ index + 1 }}</div>
          </ng-container>
          <i *ngIf="currentStatus() === 'success' || currentStatus() === 'error'"
            [class]="'el-icon-' + (currentStatus() === 'success' ? 'check' : 'close') + ' el-step__icon-inner is-status'">
          </i>
        </span>
      </div>
      <div class="el-step__main">
        <div [class]="'el-step__title ' + 'is-' + currentStatus()" #titleRef>
          <ng-container>{{ title }}</ng-container>
        </div>
        <div *ngIf="root.simple" class="el-step__arrow"></div>
        <div [class]="'el-step__description ' + 'is-' + currentStatus()">
          <ng-container>{{ description }}</ng-container>
        </div>
      </div>
    </div>
  `,
})
export class ElStep implements OnInit {
  
  @ViewChild('titleRef') titleRef: ElementRef
  
  @Input() title: string
  @Input() description: string
  @Input() icon: string
  @Input() status: string
  
  index: number = 1
  mainOffset: string = '0px'
  
  constructor(
    @Optional() public root: ElSteps,
    private el: ElementRef,
    private sanitizer: DomSanitizer
  ) {
  }
  
  currentStatus(): string {
    if (this.root.active > this.index) {
      return this.root.finishStatus
    }
    if (this.root.active === this.index) {
      return this.root.processStatus
    }
    return 'wait'
  }
  
  makeStepStyles(): SafeStyle {
    const space: string | number = this.root.space
    const width: string = typeof space === 'number' ? `${space}px` : space
      ? String(space) : `${100 / (this.root.stepsLength - 1)}%`
    const lastStyles: string = this.isLast()
      ? `max-width: ${100 / this.root.stepsLength}%;`
      : `margin-right: ${this.root.offset}px;`
    const styles: string = `flex-basis: ${width}; ${lastStyles}`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  makeLineStyles(): SafeStyle {
    const step: number = this.index === this.root.active - 1
      ? (this.currentStatus() !== 'error' ? 50 : 0)
      : this.currentStatus() === 'wait' ? 0 : 100
    const delay: string = (this.root.processStatus === 'wait' ? -1 : 1) * 150 * this.index + 'ms'
    const key = this.root.direction === 'vertical' ? 'height' : 'width'
    const styles = `border-width: ${step ? '1px' : 0}; ${key}: ${step}%; transition-delay: ${delay};`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  
  isLast(): boolean {
    return this.root.stepsLength - 1 === this.index
  }
  
  isVertical(): boolean {
    return this.root.direction === 'vertical'
  }
  
  ngOnInit(): void {
    this.index = + this.el.nativeElement.getAttribute('el-index')
    if (this.root.direction === 'horizontal' && this.root.alignCenter) {
      const width: number = this.titleRef.nativeElement.getBoundingClientRect().width
      this.mainOffset = width / 2 + 16 + 'px'
    }
    removeNgTag(this.el.nativeElement)
  }
  
}
