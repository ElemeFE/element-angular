import { Pipe, PipeTransform } from '@angular/core'
import { SafeHtml, DomSanitizer } from '@angular/platform-browser'
import * as hljs from 'highlight.js'

@Pipe({ name: 'highlightAuto' })
export class SafeHtmlPipe implements PipeTransform {
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  transform(value: string): SafeHtml {
    const relevanceHandle: any = hljs.highlightAuto(value, ['shell', 'typescript', 'html'])
    return this.sanitizer.bypassSecurityTrustHtml(relevanceHandle.value)
  }
}
