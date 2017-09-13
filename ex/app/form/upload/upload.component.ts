import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExUploadComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: 'Cascader 级联选择器', link: '/form/cascader' },
    next: { name: 'DatePicker 日期选择器', link: '/form/date-picker' },
  }

}
