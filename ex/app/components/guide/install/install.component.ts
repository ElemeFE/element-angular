import { Component } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss'],
})
export class ExInstallComponent {
  
  code: string[] = code
  page: any = {
    previous: { name: '' },
    next: { name: '快速开始', link: '/guide/start' },
  }
  
}
