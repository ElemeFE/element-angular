import { Component, ElementRef, Input, OnInit, Optional } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { ElCarousel } from './carousel'
import { fadeAnimation } from '../shared/animation'
import { removeNgTag } from '../shared/utils'

@Component({
  selector: 'el-carousel-item',
  animations: [fadeAnimation],
  template: `
    <div class="el-carousel__item"
      [class.is-active]="root.model === index"
      [class.el-carousel__item--card]="root.type === 'card'"
      [class.is-in-stage]="inStage"
      [class.is-hover]="hover"
      [class.is-animating]="isAnimating"
      (click)="clickHandle()"
      [style]="styles">
      <div class="el-carousel__mask"
        *ngIf="root.type === 'card'"
        [@fadeAnimation]="active">
      </div>
      <ng-content></ng-content>
    </div>
  `,
})
export class ElCarouselItem implements OnInit {
  
  @Input() label: string = ''
  
  private scale: number = 1
  private index: number
  private width: number
  
  private preTranslate: number
  private isAnimating: boolean
  private styles: SafeStyle
  
  constructor(
    @Optional() private root: ElCarousel,
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {
  }
  
  makeStyles(): void {
    const map: any = {
      '1': 0 - this.width,
      '-1': this.width,
      '2': this.width,
      '-2': 0 - this.width,
      '0': 0,
    }
    const offset: number = this.root.model - this.index
    const translate = map[offset]
    const styles: string = `transform: translateX(${translate}px) scale(${this.scale});`
    // change direction disable animation
    const changeDirection: boolean = (this.preTranslate < 0 && translate > 0)
      || (this.preTranslate > 0 && translate < 0)
    this.isAnimating = !changeDirection
    this.styles = this.sanitizer.bypassSecurityTrustStyle(styles)
    // save current value
    this.preTranslate = translate
  }
  
  update(): void {
    this.makeStyles()
  }
  
  ngOnInit(): void {
    // collect items
    this.root.items.push(this.label)
    // get static serial number
    this.index = + this.el.nativeElement.getAttribute('el-index')
    this.width = this.el.nativeElement.children[0].offsetWidth
    removeNgTag(this.el.nativeElement)
    
    // manually update
    this.root.subscriber.push(() => this.update())
    this.update()
  }
  
}

