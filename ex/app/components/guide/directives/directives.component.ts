import { Component } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class ExDirectivesComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: '快速上手', link: '/guide/start' },
    next: { name: '更新日志', link: '/guide/log' },
  }
  
}
