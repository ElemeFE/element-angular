import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class ExRadioComponent implements OnInit {
  
  private test: string = 'test2'
  private btn: string = 'btn2'
  
  ngOnInit(): void {
  }
}
