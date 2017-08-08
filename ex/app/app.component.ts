import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'Element Angular'
  
  ngOnInit(): void {
  }
}
