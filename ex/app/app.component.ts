import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core'
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
  
  static getTargetPathName(search: string): string {
    if (!search || !search.includes('=')) {
      return
    }
    return  search.split('=')[1]
  }
  
  constructor(
    private router: Router,
    @Inject('WindowLocation') private location: Location,
  ) {
  }
  
  ngOnInit(): void {
    const search: string = this.location.search
    const pathname: string = ExAppComponent.getTargetPathName(search)
    pathname && this.router.navigate([pathname])
    
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
