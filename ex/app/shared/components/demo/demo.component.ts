import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { SafeHtmlPipe } from '../../pipe'
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations'

@Component({
  selector: 'ex-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  providers: [SafeHtmlPipe],
  animations: [
    trigger('state', [
      state('false', style({
        opacity: 0,
        display: 'none',
      })),
      state('true',  style({
        opacity: 1,
        display: 'inline-block',
      })),
      transition('* => *', animate(`300ms ease-in-out`)),
    ]),
    trigger('expand', [
      state('false', style({
        height: 0,
      })),
      state('true', style({
        height: '*',
      })),
      transition('* => *', animate(`250ms ease-in-out`)),
    ]),
  ],
})
export class ExDemoComponent implements OnInit {
  
  @Input() code: string
  @Input() link: string
  @Input() notes: string
  
  private classes: string = 'demo-block demo-box demo-zh-CN'
  private hovering: boolean = false
  private isExpanded: boolean = false
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }
  
  openDemo(): void {
    this.link && window.open(this.link)
  }
  
  ngOnInit(): void {
    this.classes += ` demo-${this.route.routeConfig.path}`
  }
}
