import { Component, Input, OnInit, ViewEncapsulation, ElementRef } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
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
  encapsulation: ViewEncapsulation.None,
})
export class ExDemoComponent implements OnInit {
  
  @Input() link: string
  @Input() notes: string
  
  private code: string
  private classes: string = 'demo-block demo-box demo-zh-CN'
  private hovering: boolean = false
  private isExpanded: boolean = false
  
  constructor(
    private route: ActivatedRoute,
    private el: ElementRef,
  ) {
  }
  
  openDemo(): void {
    this.link && window.open(this.link)
  }
  
  showCode(): void {
    this.isExpanded = !this.isExpanded
    if (this.isExpanded) {
      this.hovering = false
    }
  }
  
  ngOnInit(): void {
    this.code = this.el.nativeElement.querySelector('.source').innerHTML
    this.classes += ` demo-${this.route.routeConfig.path}`
  }
}
