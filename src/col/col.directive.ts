import { Input, Directive, OnInit, ElementRef } from '@angular/core'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'
import { isParentAttr } from '../shared/utils'

@Directive({
  selector: '[el-col]',
  host: {
    '[style]': 'gutterStyle()',
    '[class]': 'classList() + sizeClassList()',
  },
})
export class ElColDirective implements OnInit {
  
  @Input() span: number = 24
  @Input() offset: number = 0
  @Input() push: number = 0
  @Input() pull: number = 0
  @Input() xs: any
  @Input() sm: any
  @Input() md: any
  @Input() lg: any
  
  parentIsRow: any = null
  gutterFromParent: number = 0
  nativeClass: string = ' '
  
  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {
    this.nativeClass += this.el.nativeElement.classList.value
  }
  
  classList(): string {
    const makeClass = (key: string): string => key !== 'span'
      ? ` el-col-${key}-${this[key]}`
      : ` el-col-${this[key]}`
    const classStr = ['span', 'offset', 'pull', 'push'].reduce((pre, next) => !this[next]
      ? pre
      : pre + makeClass(next), 'el-col')
    return classStr + this.nativeClass
  }
  
  sizeClassList(): string {
    const makeClass = (key: string): string => {
      const props = this[key] || {}
      return Object.keys(props).map(prop => prop !== 'span'
        ? `el-col-${key}-${prop}-${props[prop]}`
        : `el-col-${key}-${props[prop]}`).join(' ')
    }
    const classStr: string = ['xs', 'sm', 'md', 'lg'].reduce((pre, next) => !this[next] ?
      pre : typeof this[next] === 'object'
        ? makeClass(next)
        : ` el-col-${next}-${this[next]}`, '')
    
    return classStr
  }
 
  gutterStyle(): SafeStyle {
    let styleStr = ''
    if (this.gutterFromParent) {
      styleStr += `padding-left: ${this.gutterFromParent / 2}px;`
      styleStr += `padding-right: ${this.gutterFromParent / 2}px;`
    }
    return this.sanitizer.bypassSecurityTrustStyle(styleStr)
  }
  
  ngOnInit(): void {
    const nativeElement = this.el.nativeElement
    this.parentIsRow = isParentAttr(nativeElement, 'el-row')
    if (this.parentIsRow) {
      this.gutterFromParent = this.parentIsRow.getAttribute('gutter') || 0
    }
  }
  
}
