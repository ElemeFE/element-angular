import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'ex-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExAppComponent implements OnInit {
  
  title: string = 'Element Angular'
  private lastRouteUrl: string[] = []
  
  constructor(
    private router: Router,
  ) {
  }
  
  ngOnInit(): void {
    this.router.events.subscribe((ev) => {
      const len = this.lastRouteUrl.length
      if (ev instanceof NavigationEnd) {
        this.lastRouteUrl.push(ev.url)
        if (len > 1 && ev.url === this.lastRouteUrl[len - 2]) {
          return
        }
        window.scrollTo(0, 0)
      }
    })
  }
}
