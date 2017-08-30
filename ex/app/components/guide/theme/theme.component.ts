import { Component, OnInit } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ExThemeComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: '国际化', link: '/guide/i18n' },
    next: { name: '更新日志', link: '/guide/log' },
  }
  
  constructor(
  ) {
  }
  
  ngOnInit(): void {
  }
}
