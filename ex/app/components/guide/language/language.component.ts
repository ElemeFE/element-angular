import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class ExLanguageComponent implements OnInit {
  
  private page: any = {
    previous: { name: '快速上手', link: '/guide/start' },
    next: { name: '自定义主题', link: '/guide/theme' },
  }
  constructor(
  ) {
  }
  
  ngOnInit(): void {
  }
}
