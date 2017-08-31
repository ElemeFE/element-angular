import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core'
import { ElMessageService } from '../../../../src/index'
import code from './code'

@Component({
  selector: 'ex-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExMessageComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Loading 加载', link: '/notice/loading' },
    next: { name: 'Loading 加载', link: '/notice/loading' },
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
  
  constructor(
    private message: ElMessageService,
  ) {
  }
  
  ngOnInit(): void {
    this.message.send('', '')
  }
}
