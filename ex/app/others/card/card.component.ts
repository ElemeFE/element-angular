import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExCardComponent implements OnInit {
  
  private code: string[] = code
  private exClass: any = class {
    currentDate(): Date {
      return new Date()
    }
  }
  private page: any = {
    previous: { name: 'Steps 步骤条', link: '/nav/steps' },
    next: { name: null, link: '' },
  }
  
  ngOnInit(): void {
  }
}
