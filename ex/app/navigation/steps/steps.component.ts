import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExStepsComponent implements OnInit {
  
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
    previous: { name: 'Check 多选框', link: '/form/checkbox' },
    next: { name: 'InputNumber 计数器', link: '/form/input-number' },
  }
  
  
  ngOnInit(): void {
  }
}
