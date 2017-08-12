import { Component, OnInit,  } from '@angular/core'

@Component({
  selector: 'my-tooltip',
  templateUrl: './tooltip.component.html',
  styles: ['tooltip.component.css'],
})
export class TooltipComponent implements OnInit {
  
  private test: string = 'test2'
  private btn: string = 'btn2'
  
  ngOnInit(): void {
  }
}
