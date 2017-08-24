import { Component, OnInit } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class ExInputComponent implements OnInit {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Check 多选框', link: '/form/checkbox' },
    next: { name: 'Input 输入框', link: '/form/input' },
  }
  
  ngOnInit(): void {
  }
}
