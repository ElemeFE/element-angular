import {
  Component, ComponentRef, ContentChild, ElementRef, OnInit, QueryList, TemplateRef,
  ViewChild,
} from '@angular/core'
import { ElUploadProps } from './upload.props'
import { ElUploadRequest } from './upload.request'

@Component({
  selector: 'el-upload',
  template: `
    <div [class]="'el-upload el-upload--text' + listType"
      (click)="clickHandle()">
      <el-button *ngIf="!trigger" size="small" type="primary">点击上传</el-button>
      <ng-container *ngIf="trigger">
        <ng-template [ngTemplateOutlet]="trigger"></ng-template>
      </ng-container>
      <input class="el-upload__input" type="file" name="file" #input
        [accept]="accept" [name]="name" [multiple]="multiple"
        [ngModel]="files"
        (change)="changeHandle($event)">
    </div>
    <ng-container *ngIf="tip">
      <ng-template [ngTemplateOutlet]="tip"></ng-template>
    </ng-container>
    
    <ul class="el-upload-list el-upload-list--text">
      <li class="el-upload-list__item is-success">
        <a class="el-upload-list__item-name">
          <i class="el-icon-document"></i>
          food.jpeg</a>
        <label class="el-upload-list__item-status-label">
          <i class="el-icon-upload-success el-icon-circle-check"></i>
        </label>
        <i class="el-icon-close"></i>
      </li>
      <li class="el-upload-list__item is-success">
        <a class="el-upload-list__item-name">
          <i class="el-icon-document"></i>
          food2.jpeg</a>
        <label class="el-upload-list__item-status-label">
          <i class="el-icon-upload-success el-icon-circle-check"></i>
        </label>
        <i class="el-icon-close"></i>
      </li>
    </ul>
  `,
})
export class ElUpload extends ElUploadProps implements OnInit {
  
  @ContentChild('trigger') trigger: TemplateRef<any>
  @ContentChild('tip') tip: TemplateRef<any>
  @ViewChild('input') input: ElementRef
  
  private files: FileList
  
  constructor(
    private request: ElUploadRequest,
  ) {
    super()
  }
  
  clickHandle(): void {
    if (this.disabled) return
    this.input.nativeElement.click()
  }
  
  changeHandle(event: Event): void {
    const files: FileList = (<HTMLInputElement>event.target).files
    if (!files || !files.length) return
    const checkedFiles: File[] = this.multiple ? Array.from(files) : [files[0]]
    this.input.nativeElement.value = null
    checkedFiles.forEach((file: File) => {
      this.lifecycle.start()
      this.uploadFilter(file, () => this.upload(file))
    })
  }
  
  upload(file: File): void {
  
  
  
  }
  
  ngOnInit(): void {
    console.log(this.request)
  }
  
}
