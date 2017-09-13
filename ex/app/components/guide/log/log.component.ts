import { Component, ViewEncapsulation } from '@angular/core'
import { DocsService } from '../../../shared/services/docs/docs.service'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
export type Logs = {
  'releases-link': string
  releases: any[]
}

@Component({
  selector: 'ex-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExLogComponent {
  
  private logs: Logs
  private page: any = {
    previous: { name: '自定义主题', link: '/guide/theme' },
    next: { name: 'Layout 布局', link: '/basic/layout' },
  }
  
  constructor(
    private docsService: DocsService,
    private sanitizer: DomSanitizer,
  ) {
  }
  
  makeSafeUrl(link: string | null): SafeUrl {
    const url: string = link || 'javascript:;'
    return this.sanitizer.bypassSecurityTrustUrl(url)
  }
  
  ngOnInit(): void {
    this.docsService.getChangeLogs()
      .subscribe(json => {
        this.logs = json
        this.logs.releases = this.logs.releases.reverse()
      })
  }
  
}
