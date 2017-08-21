import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ex-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class ExCheckboxComponent implements OnInit {
  
  private checked: boolean = true
  private checkList: string[] = [
    '复选框A',
    '选中且禁用',
  ]
  
  ngOnInit(): void {
  }
}
