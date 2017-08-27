import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExSwitchComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Select 选择器', link: '/form/select' },
    next: { name: 'Switch 开关', link: '/form/switch' },
  }
  
  ngOnInit(): void {
  }
}
