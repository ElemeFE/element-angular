import { Component, Input, ChangeDetectionStrategy, Optional } from '@angular/core'
import { ElBreadcrumb } from './breadcrumb'
import { NavigationExtras, Router } from '@angular/router'

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
export class ElBreadcrumbItem {
  
  @Input() to: string
  @Input() prevent: boolean = false
  @Input() extras?: NavigationExtras
  
  constructor(
    @Optional() private root: ElBreadcrumb,
    private router: Router,
  ) {
  }
  
  clickHandle(event: Event): void {
    event.stopPropagation()
    this.root.itemHandle(this.to)
    if (!this.to || this.root.prevent || this.prevent) return
    this.router.navigateByUrl(this.to, this.extras)
      .then(() => {})
      .catch(() => {})
  }
  
}
