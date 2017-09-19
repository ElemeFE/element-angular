import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExLoadingComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Table 表格', link: '/data/table' },
    next: { name: 'Message 消息提示', link: '/notice/message' },
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

}
