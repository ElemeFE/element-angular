import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { removeNgTag } from '../../shared/utils'

@Component({
  selector: 'el-pagination-pager',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul (click)="listClickHandle()" class="el-pager">
      <li class="number" [class.active]="current === 1"
          *ngIf="count > 0">1</li>
      <li [class]="'el-icon more btn-quickprev ' + quickprevIconClass"
          *ngIf="showPrevMore"
          (mouseenter)="quickprevIconClass = 'el-icon-d-arrow-left'"
          (mouseleave)="quickprevIconClass = 'el-icon-more'"></li>
      <li class="number"
          *ngFor="let pager of makePagers()"
          [class.active]="current === pager">{{ pager }}</li>
      <li [class]="'el-icon more btn-quicknext ' + quicknextIconClass"
          *ngIf="showNextMore"
          (mouseenter)="quicknextIconClass = 'el-icon-d-arrow-right'"
          (mouseleave)="quicknextIconClass = 'el-icon-more'"></li>
      <li class="number"
          [class.active]="current === count"
          *ngIf="count > 1">{{ count }}</li>
    </ul>
  `,
})
export class ElPaginationPager implements OnInit {
  
  @Input() current: number = 1
  @Input() count: number
  
  private showPrevMore: boolean = false
  private showNextMore: boolean = false
  private quicknextIconClass: string = 'el-icon-more'
  private quickprevIconClass: string = 'el-icon-more'
  
  constructor(
    private el: ElementRef,
  ) {
  }
  
  makePagers(): number[] {
    const pagerCount: number = 7
    
    const current = this.current
    const count = this.count
    
    let showPrevMore = false
    let showNextMore = false
    if (count > pagerCount) {
      showPrevMore = current > pagerCount - 3
      showNextMore = current < count - 3
    }
  
    const array = []
    if (showPrevMore && !showNextMore) {
      const startPage = count - (pagerCount - 2)
      for (let i = startPage; i < count; i++) {
        array.push(i)
      }
    } else if (!showPrevMore && showNextMore) {
      for (let i = 2; i < pagerCount; i++) {
        array.push(i)
      }
    } else if (showPrevMore && showNextMore) {
      const offset = Math.floor(pagerCount / 2) - 1
      for (let i = current - offset ; i <= current + offset; i++) {
        array.push(i)
      }
    } else {
      for (let i = 2; i < count; i++) {
        array.push(i)
      }
    }
    this.showPrevMore = showPrevMore
    this.showNextMore = showNextMore
    
    return array
  }

  ngOnInit(): void {
    removeNgTag(this.el.nativeElement)
  }
}
