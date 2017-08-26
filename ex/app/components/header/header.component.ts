import { Component, OnInit } from '@angular/core'
import { NavigationStart, Router } from '@angular/router'

@Component({
  selector: 'ex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class ExHeaderComponent implements OnInit {
  
  private isGuide: boolean = false
  
  constructor(
    private router: Router,
  ) {
  }
  
  ngOnInit(): void {
    this.router.events
      .subscribe(event => {
        if(event instanceof NavigationStart) {
          this.isGuide = event.url.startsWith('/guide')
        }
      })
  }
}
