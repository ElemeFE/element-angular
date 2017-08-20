import { Component, OnInit,  } from '@angular/core'

@Component({
  selector: 'ex-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class ExCheckboxComponent implements OnInit {
  
  private test: string = 'test2'
  private btn: string = 'btn2'
  
  ngOnInit(): void {
  }
}
