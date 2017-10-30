import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[el-class]',
})
export class ElClassDirective implements OnInit {
  
  @Input('el-class') classNames: string = ''
  
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
  }
  
  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.classNames)
  }
  
}
