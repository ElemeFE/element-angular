import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ExButtonComponent implements OnInit {
  
  clickHandler(params: any): void {
    console.log('click', params)
  }
  
  ngOnInit(): void {
  }
}
