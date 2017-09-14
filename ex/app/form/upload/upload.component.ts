import { Component, forwardRef, Inject, ViewEncapsulation } from '@angular/core'
import { ElMessageService } from '../../../../src/index'
import code from './code'

@Component({ selector: 'ex-upload-demo' })
export class ExUploadDemoComponent {
  
  private fileList: any[] = [{
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?' +
    'imageMogr2/thumbnail/360x360/format/webp/quality/100'},
    {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99b' +
    'ce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    }]
  
  constructor(
    @Inject(forwardRef(() => ElMessageService)) private message: any,
  ) {
  }
  
  limit500(event: any): void {
    const file: File = event.file.raw
    if (file.size > 500000) {
      this.message.info('文件超过了 500 kb.')
      event.reject()
    } else {
      event.next()
    }
  }
  
}

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
  private exClass: any = ExUploadDemoComponent

}
