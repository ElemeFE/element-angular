import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExStepsComponent implements OnInit {
  
  private active: number = 0
  private code: string[] = code
  private page: any = {
    previous: { name: 'Check 多选框', link: '/form/checkbox' },
    next: { name: 'InputNumber 计数器', link: '/form/input-number' },
  }
  
  change(): void {
    if (this.active < 3) {
      this.active ++
    } else {
      this.active  = 0
    }
  }
  
  ngOnInit(): void {
  }
}
