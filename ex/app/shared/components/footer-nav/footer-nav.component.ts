import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'ex-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss'],
})
export class ExFooterNavComponent implements OnInit {
  
  @Input() name: string
  @Input() link: string
  
  constructor(
    private router: Router,
  ) {
  }
  
  clickHandle(): void {
    this.link && this.router.navigate([this.link])
  }

  ngOnInit(): void {
  }
}
