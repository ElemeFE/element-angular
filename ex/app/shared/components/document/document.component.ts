import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { SafeHtmlPipe } from '../../pipe'
import { DocsService } from '../../services'


@Component({
  selector: 'ex-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss'],
  providers: [SafeHtmlPipe, DocsService],
  encapsulation: ViewEncapsulation.None,
})
export class ExDocumentComponent implements OnInit {
  
  @Input() doc: string
  
  constructor(
    private docsService: DocsService
  ) {
  
  }
  
  ngOnInit(): void {
  }
}
