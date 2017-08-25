import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ExThemeComponent implements OnInit {
  
  private page: any = {
    previous: { name: '国际化', link: '/guide/i18n' },
    next: { name: 'Angular 动画', link: '/guide/transition' },
  }
  
  constructor(
  ) {
  }
  
  ngOnInit(): void {
  }
}
