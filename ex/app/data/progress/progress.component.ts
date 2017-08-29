import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExProgressComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Tag 标签', link: '/data/tag' },
    next: { name: 'Input 输入框', link: '/form/input' },
  }
  
  ngOnInit(): void {
  }
}
