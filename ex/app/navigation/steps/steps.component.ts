import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExStepsComponent {
  
  private ExClass: new () => {} = class {
    private active: number = 1
    handle(): void {
      if (this.active === 3) {
        this.active = 0
      } else {
        this.active ++
      }
    }
  }
  private code: string[] = code
  private page: any = {
    previous: { name: 'Breadcrumb 面包屑', link: '/nav/breadcrumb' },
    next: { name: 'Dropdown 下拉菜单', link: '/nav/dropdown' },
  }
  
}
