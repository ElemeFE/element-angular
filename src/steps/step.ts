import { Component, Input, OnInit, Optional, ElementRef } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { ElSteps } from './steps'

@Component({
  selector: 'el-step',
  template: `
    <div [class]="'el-step is-' + rootSteps.direction"
      [ngStyle]="{'margin-right': isLast() ? '' : - rootSteps.offset + 'px' }"
      [style]="makeStepStyles()">
      <div [class]="'el-step__head is-' + currentStatus() + (icon ? '' : ' is-text')">
        <div [class]="'el-step__line is-' + rootSteps.direction + (icon ? ' is-icon' : '')"
          [ngStyle]="{'margin-right': isLast() ? '' : rootSteps.offset + 'px' }">
          <i class="el-step__line-inner" [style]="makeLineStyles()"></i>
        </div>

        <span class="el-step__icon">
        <ng-container *ngIf="currentStatus() !== 'success' && currentStatus() !== 'error'">
          <i *ngIf="icon" [class]="'el-icon-' + icon"></i>
          <div *ngIf="!icon">{{ index + 1 }}</div>
        </ng-container>
        <i *ngIf="currentStatus() === 'success' || currentStatus() === 'error'"
          [class]="'el-icon-' + (currentStatus() === 'success' ? 'check' : 'close')">
        </i>
      </span>
      </div>
      <div class="el-step__main" [ngStyle]="{marginLeft: mainOffset}">
        <div [class]="'el-step__title ' + 'is-' + currentStatus()">
          <ng-container>{{ title }}</ng-container>
        </div>
        <div [class]="'el-step__description ' + 'is-' + currentStatus()">
          <ng-container>{{ description }}</ng-container>
        </div>
      </div>
    </div>
  `,
})
export class ElStep implements OnInit {
  
  @Input() title: string
  @Input() description: string
  @Input() icon: string
  @Input() status: string
  
  private index: number = 1
  
  constructor(
    @Optional() private rootSteps: ElSteps,
    private el: ElementRef,
    private sanitizer: DomSanitizer
  ) {
  }
  
  currentStatus(): string {
    if (this.rootSteps.active > this.index) {
      return this.rootSteps.finishStatus
    }
    if (this.rootSteps.active === this.index) {
      return this.rootSteps.processStatus
    }
    return 'wait'
  }
  
  makeStepStyles(): SafeStyle {
    if (this.rootSteps.center && this.isLast()) {
      return this.sanitizer.bypassSecurityTrustStyle('')
    }
    const width: number = this.rootSteps.center ? this.rootSteps.stepsLength - 1 : this.rootSteps.stepsLength
    const space: string = this.rootSteps.space ? this.rootSteps.space : 100 / width + '%'
    const styles: string = `${this.rootSteps.direction === 'horizontal' ? 'width' : 'height'}: ${space};`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  makeLineStyles(): SafeStyle {
    const step: number = this.index === this.rootSteps.active - 1
      ? (this.currentStatus() !== 'error' ? 50 : 0)
      : this.currentStatus() === 'wait' ? 0 : 100
    const delay: string = (this.rootSteps.processStatus === 'wait' ? -1 : 1) * 150 * this.index + 'ms'
    const key = this.rootSteps.direction === 'vertical' ? 'height' : 'width'
    const styles = `border-width: ${step ? '1px' : 0}; ${key}: ${step}%; transition-delay: ${delay};`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  
  isLast(): boolean {
    return this.rootSteps.active - 1 === this.index
  }
  
  ngOnInit(): void {
    this.index = + this.el.nativeElement.getAttribute('el-index')
  }
  
}
