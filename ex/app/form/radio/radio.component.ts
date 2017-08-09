import { Component, OnInit,  } from '@angular/core'

@Component({
  selector: 'my-radio',
  templateUrl: './radio.component.html',
  styles: ['radio.component.css'],
})
export class RadioComponent implements OnInit {
  
  private test: string = 'test2'
  private btn: string = 'btn2'
  
  ngOnInit(): void {
  }
}
