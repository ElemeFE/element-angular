import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExLoadingComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Check 多选框', link: '/form/checkbox' },
    next: { name: 'InputNumber 计数器', link: '/form/input-number' },
  }
  private exClass: new () => {} = class {
    private loading: boolean = false
    
    handle(): void {
      this.loading = true
      const timer = setTimeout(() => {
        this.loading = false
        clearTimeout(timer)
      }, 3000)
    }
  }
  
  ngOnInit(): void {
  }
}
