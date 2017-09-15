import { Input, Directive, ElementRef } from '@angular/core'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'

@Directive({
  selector: '[el-row]',
  host: {
    '[class]': '"el-row" + justifyClass() + alignClass() + nativeClass',
    '[class.el-row--flex]': 'type === "flex"',
    '[style]': 'gutterStyle()',
  },
})
export class ElRowDirective {
  
  @Input() type: string
  @Input() gutter: number = 0
  @Input() justify: string = 'start'
  @Input() align: string = 'top'
  
  nativeClass: string = ' '
  
  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {
    this.nativeClass += this.el.nativeElement.classList.value
  }
  
  justifyClass(): string {
    return this.justify !== 'start' ? ` is-justify-${this.justify}` : ''
  }
  
  alignClass(): string {
    return this.align !== 'top' ? ` is-align-${this.align}` : ''
  }
  
  gutterStyle(): SafeStyle {
    let styleStr = ''
    if (this.gutter) {
      styleStr += `margin-left: -${this.gutter / 2}px;`
      styleStr += `margin-right: -${this.gutter / 2}px;`
    }
    return this.sanitizer.bypassSecurityTrustStyle(styleStr)
  }
  
}
