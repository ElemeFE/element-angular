import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExCollapseComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Tooltip 文字提示', link: '/others/tooltip' },
    next: { name: 'Dialog 对话框', link: '/others/dialog' },
  }
  
  ngOnInit(): void {
  }
}
