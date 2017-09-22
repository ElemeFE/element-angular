import { Component, OnInit } from '@angular/core'
import { DocsService } from '../../shared/services/docs/docs.service'
import { SafeStyle, DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { NavigationStart, Router } from '@angular/router'

@Component({
  selector: 'ex-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss'],
})
export class ExSideComponent implements OnInit {
  
  private catalog: JSON
  private version: string
  private currentLink: string
  
  constructor(
    private docsService: DocsService,
    private sanitizer: DomSanitizer,
    private router: Router,
  ) {
  }
  
  cursorSylte(link: string | null): SafeStyle {
    const value = link ? 'pointer' : 'default'
    return this.sanitizer.bypassSecurityTrustStyle(`cursor: ${value}`)
  }
  
  makeSafeUrl(link: string | null): SafeUrl {
    const url: string = link || 'javascript:;'
    return this.sanitizer.bypassSecurityTrustUrl(url)
  }
  
  ngOnInit(): void {
    this.docsService.getCatalog()
      .subscribe(json => this.catalog = json)
    this.docsService.getVersion()
      .subscribe((v: string) => this.version = v)
  
    this.router.events
      .subscribe(event => {
        if(event instanceof NavigationStart) {
          this.currentLink = event.url
        }
      })
  }
}
