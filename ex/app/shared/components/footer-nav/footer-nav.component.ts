import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
export type next = { name?: string, link?: string }
export type page = { previous?: next, next?: next }

@Component({
  selector: 'ex-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss'],
})
export class ExFooterNavComponent implements OnInit {
  
  @Input() page: page
  
  constructor(
    private router: Router,
  ) {
  }
  
  clickHandle(nextPage: boolean): void {
    const link = nextPage ? this.page.next.link : this.page.previous.link
    link && this.router.navigate([link])
  }

  ngOnInit(): void {
  }
}
