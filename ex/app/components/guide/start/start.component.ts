import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class ExStartComponent implements OnInit {
  
  private page: any = {
    previous: { name: '安装', link: '/guide/install' },
    next: { name: '国际化', link: '/guide/i18n' },
  }
  
  constructor(
  ) {
  }
  
  ngOnInit(): void {
  }
}
