import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExLoadingComponent {
  
  code: string[] = code
  page: any = {
    previous: { name: 'Tree 树型控件', link: '/data/tree' },
    next: { name: 'Message 消息提示', link: '/notice/message' },
  }
  exClass: new () => {} = class {
    loading: boolean = false
    
    handle(): void {
      this.loading = true
      const timer = setTimeout(() => {
        this.loading = false
        clearTimeout(timer)
      }, 3000)
    }
  }

}
