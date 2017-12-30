import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExTreeComponent {
  
  private code: string[] = code
  private tags: string[] = ['123', '234234', '0011']
  private page: any = {
    previous: { name: 'Form 表单', link: '/form/form' },
    next: { name: 'Progress 输入框', link: '/data/progress' },
  }
  
  handle(): void {
  }
  
}
