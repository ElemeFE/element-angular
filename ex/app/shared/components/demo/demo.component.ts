import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { SafeHtml, DomSanitizer } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import { HighLightPipe } from '../../pipe'
import { ElMessageService } from '../../../../../src/element-angular.module'

@Component({
  selector: 'ex-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  providers: [HighLightPipe],
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
  
  @Input() notes: string
  @Input() code: string
  @Input('class') parentClass: new ([string]?: any) => {} = class {}
  
  private classes: string = 'demo-block demo-box demo-zh-CN'
  private hovering: boolean = false
  private isExpanded: boolean = false
  private safeNotes: SafeHtml
  
  
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private messageService: ElMessageService,
  ) {
  }
  
  openDemo(): void {
    this.messageService.info('在线运行正在开发中')
    // this.link && window.open(this.link)
  }
  
  showCode(): void {
    this.isExpanded = !this.isExpanded
    if (this.isExpanded) {
      this.hovering = false
    }
  }
  
  ngOnInit(): void {
    this.safeNotes = this.sanitizer.bypassSecurityTrustHtml(this.notes)
    this.classes += ` demo-${this.route.routeConfig.path}`
    // this.code = this.el.nativeElement.querySelector('.source').innerHTML
    // this.code = this.code.replace(/=""/g, '')
    //   .replace(/<!---->/g, '')
  }
}
