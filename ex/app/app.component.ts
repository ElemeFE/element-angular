import { Component, OnInit, ViewEncapsulation } from '@angular/core'


@Component({
  selector: 'ex-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExAppComponent implements OnInit {
  title: string = 'Element Angular'
  
  ngOnInit(): void {
  }
}
