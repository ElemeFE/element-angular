import { Component, OnInit } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { environment } from '../../../environments'

@Component({
  selector: 'ex-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('state', [
      state('false', style({
        opacity: 0,
        height: 0,
      })),
      state('true',  style({
        opacity: 1,
        height: '*',
      })),
      transition('* => *', animate(`0.5s 350ms ease-in-out`)),
    ]),
  ],
})
export class ExFooterComponent implements OnInit {
  
  // todo get versions from environment
  private version: string = environment.version
  private showFooter: boolean = false
  
  ngOnInit(): void {
    this.showFooter = true
  }
}
