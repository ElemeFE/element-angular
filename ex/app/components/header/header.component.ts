import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class ExHeaderComponent implements OnInit {
  
  private isHome: boolean = true
  
  ngOnInit(): void {
  }
}
