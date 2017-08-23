import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { DocsService } from '../../shared/services'
import code from './code'

@Component({
  selector: 'ex-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExIconComponent implements OnInit {
  
  private code: string[] = code
  private icons: string[]
  private page: any = {
    previous: { name: 'Typography 字体', link: '/basic/font' },
    next: { name: 'Button 按钮', link: '/basic/button' },
  }
  
  constructor(
    private docsService: DocsService
  ) {}
  
  ngOnInit(): void {
    this.docsService.getDocuments('icon-ex')
      .subscribe(res => this.icons = res)
  }
}
