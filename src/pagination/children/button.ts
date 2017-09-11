import {
  ChangeDetectionStrategy, Component, ElementRef,
  EventEmitter, Input, OnInit, Output,
} from '@angular/core'
import { removeNgTag } from '../../shared/utils'

@Component({
  selector: 'el-pagination-btn',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button type="button" class="btn-prev"
      *ngIf="dir === 'left'"
      [class.disabled]="disabled"
      (click)="clickHandle(-1)">
      <i class="el-icon el-icon-arrow-left"></i>
    </button>
    <button type="button" class="btn-next"
      *ngIf="dir === 'right'"
      [class.disabled]="disabled"
      (click)="clickHandle(1)">
    <i class="el-icon el-icon-arrow-right"></i>
    </button>
  `,
})
export class ElPaginationButton implements OnInit {
  
  // left or right
  @Input() dir: string
  @Input() disabled: boolean = false
  @Output() next: EventEmitter<number> = new EventEmitter<number>()
  
  constructor(
    private el: ElementRef,
  ) {
  }
  
  clickHandle(step: number): void {
    if (this.disabled) return
    this.next.emit(step)
  }
  
  ngOnInit(): void {
    removeNgTag(this.el.nativeElement)
  }
}
