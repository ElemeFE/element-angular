import { Component, OnInit } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class ExCheckboxComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Radio 单选框', link: '/form/radio' },
    next: { name: 'Input 输入框', link: '/form/checkbox' },
  }
  
  ngOnInit(): void {
  }
}
