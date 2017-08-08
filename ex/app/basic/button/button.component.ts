import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styles: ['button.component.css'],
})
export class ButtonComponent implements OnInit {
  title: string = 'hello from webpack '
  
  clickHandler(params: any) {
    console.log('click', params)
  }
  
  ngOnInit(): void {
  }
}
