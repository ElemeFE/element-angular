import { Component, OnInit } from '@angular/core'
import { DocsService } from '../../shared/services/docs/docs.service'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'ex-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss'],
})
export class ExSideComponent implements OnInit {
  
  private catalog: JSON
  
  constructor(
    private docsService: DocsService,
    private sanitizer: DomSanitizer,
  ) {
  }
  
  cursorSylte(link: string | null): SafeStyle {
    const value = link ? 'pointer' : 'default'
    return this.sanitizer.bypassSecurityTrustStyle(`cursor: ${value}`)
  }
  
  ngOnInit(): void {
    this.docsService.getCatalog()
      .subscribe(json => this.catalog = json)
  }
}
