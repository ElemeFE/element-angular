import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { HighLightPipe } from '../../pipe'
import { DocsService } from '../../services'

@Component({
  selector: 'ex-document',
  templateUrl: './document.component.html',
  providers: [HighLightPipe, DocsService],
  encapsulation: ViewEncapsulation.None,
})
export class ExDocumentComponent implements OnInit {
  
  @Input() doc: string = ''
  
  private apis: any = {}
  private errorMsg: string
  
  constructor(
    private docsService: DocsService
  ) {
  }
  
  ngOnInit(): void {
    this.docsService.getDocuments(this.doc)
      .subscribe(res => this.apis = res,
        err => err.status === 404 && (this.errorMsg = '文档开发中..'))
  }
}
