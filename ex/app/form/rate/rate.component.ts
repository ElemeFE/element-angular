import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExRateComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Switch 开关', link: '/form/switch' },
    next: { name: 'Switch 开关', link: '/form/switch' },
  }
  
  ngOnInit(): void {
  }
}
