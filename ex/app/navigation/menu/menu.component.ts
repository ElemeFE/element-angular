import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-menu',
  templateUrl: './menu.component.html',
})
export class ExMenuComponent implements OnInit {
  
  private page: any = {
    previous: { name: 'Notification 通知', link: '/notice/notification' },
    next: { name: 'Breadcrumb 面包屑', link: '/nav/breadcrumb' },
  }
  ngOnInit(): void {
  }
}
