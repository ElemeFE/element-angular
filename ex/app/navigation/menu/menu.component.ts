import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class ExMenuComponent implements OnInit {
  
  private page: any = {
    previous: { name: 'Notification 通知', link: '/notice/notification' },
    next: { name: 'Steps 步骤条', link: '/nav/steps' },
  }
  ngOnInit(): void {
  }
}
