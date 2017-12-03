import { Component, forwardRef, Inject, ViewEncapsulation } from '@angular/core'
import { ElMessageService } from '../../../../src/element-angular.module'
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'
import code from './code'

@Component({
  selector: 'ex-upload-demo',
  template: ` `,
})
export class ExUploadDemoComponent {
  
  private fileList: any[] = [{
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?' +
    'imageMogr2/thumbnail/360x360/format/webp/quality/100'},
    {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99b' +
    'ce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    }]
  private imageUrl: SafeUrl
  private dialogImageUrl: SafeUrl
  private showDialog: boolean = false
  
  constructor(
    @Inject(forwardRef(() => ElMessageService)) private message: ElMessageService,
    @Inject(forwardRef(() => DomSanitizer)) private sanitizer: DomSanitizer,
  ) {
  }
  
  limit500(file: File): boolean {
    if (file.size > 500000) {
      this.message.info('文件超过了 500 kb.')
      return false
    }
    return true
  }
  
  successHandle(event: any): void {
    const file: File = event.commonFile.raw
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file))
    this.message.info('文件上传成功')
  }
  
  errorHandle(event: any): void {
    const { error } = event
    this.message.error('文件上传失败:' + error)
  }
  
  previewHandle(commonFile: any): void {
    const file: File = commonFile.raw
    this.dialogImageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file))
    console.log(this.dialogImageUrl)
    this.showDialog = true
  }
  
  removeHandle(commonFile: any): void {
    this.message.info('文件已移除')
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
    previous: { name: 'Rate 评分', link: '/form/rate' },
    next: { name: 'Form 表单', link: '/form/form' },
  }
  private exClass: any = ExUploadDemoComponent

}
