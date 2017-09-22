import { Component, ElementRef, forwardRef, Inject, Input, OnInit } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { ElCarousel } from './carousel'
import { fadeAnimation } from '../shared/animation'
import { removeNgTag } from '../shared/utils'

@Component({
  selector: 'el-carousel-item',
  animations: [fadeAnimation],
  template: `
    <div class="el-carousel__item"
      [class.is-active]="isActive"
      [class.el-carousel__item--card]="root.type === 'card'"
      [class.is-animating]="isAnimating"
      [style]="styles">
      <!--<div class="el-carousel__mask" *ngIf="root.type === 'card'"-->
        <!--[@fadeAnimation]="isActive()">-->
      <!--</div>-->
      <ng-content></ng-content>
    </div>
  `,
})
export class ElCarouselItem implements OnInit {
  
  // parent component will set index
  @Input() index: number
  @Input() label: string = ''
  
  // oninit set
  width: number
  
  preTranslate: number
  isAnimating: boolean
  isActive: boolean = false
  styles: SafeStyle
  
  constructor(
    @Inject(forwardRef(() => ElCarousel)) public root: ElCarousel,
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {
  }
  
  updateActive(): void {
    const isActive: boolean = this.root.model === this.index
    if (this.isActive !== isActive) {
      this.isActive = isActive
    }
  }
  
  updateStyles(): void {
    const map: any = {
      '1': 0 - this.width,
      '-1': this.width,
      '2': this.width,
      '-2': 0 - this.width,
      '0': 0,
    }
    const offset: number = this.root.model - this.index
    const translate = map[offset]
    const styles: string = `transform: translateX(${translate}px);`
    // change direction disable animation
    const changeDirection: boolean = (this.preTranslate < 0 && translate > 0)
      || (this.preTranslate > 0 && translate < 0)
    this.isAnimating = !changeDirection
    this.styles = this.sanitizer.bypassSecurityTrustStyle(styles)
    // save current value
    this.preTranslate = translate
  }
  
  update(): void {
    this.updateStyles()
    this.updateActive()
  }
  
  ngOnInit(): void {
    // collect items
    this.root.items.push(this.label)
    this.width = this.el.nativeElement.children[0].offsetWidth
    removeNgTag(this.el.nativeElement)
    
    // manually update
    this.root.subscriber.push(() => this.update())
    this.update()
  }
  
}

