import { Component, Input, Optional, OnInit, ElementRef, ChangeDetectionStrategy } from '@angular/core'
import { ElBreadcrumb } from './breadcrumb'
import { Router } from '@angular/router'
import { removeNgTag } from '../shared/utils'

@Component({
  selector: 'el-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="el-breadcrumb__item">
      <span class="el-breadcrumb__item__inner" (click)="clickHandle($event)">
        <ng-content></ng-content>
      </span>
      <span class="el-breadcrumb__separator">{{root.separator}}</span>
    </span>
  `,
})
export class ElBreadcrumbItem implements OnInit {
  
  @Input() to: string
  @Input() prevent: boolean = false
  @Input() extras?: any
  
  constructor(
    @Optional() public root: ElBreadcrumb,
    private router: Router,
    private el: ElementRef,
  ) {
  }
  
  clickHandle(event: Event): any {
    event.stopPropagation()
    this.root.itemHandle(this.to)
    if (!this.to || this.root.prevent || this.prevent) return
    return this.router.navigateByUrl(this.to, this.extras)
  }
  
  ngOnInit(): void {
    removeNgTag(this.el.nativeElement)
  }
  
}
