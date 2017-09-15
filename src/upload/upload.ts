import {
  Component, ContentChild, ElementRef, OnInit, TemplateRef,
  ViewChild,
} from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { HttpResponse } from '@angular/common/http'
import { ElUploadProps } from './upload.props'
import { ElUploadRequest } from './upload.request'
import { CommonFile, UploadFile } from './upload.interface'

@Component({
  selector: 'el-upload',
  template: `
    <ng-template #uploadList>
      <el-upload-list [files]="files"  *ngIf="showFileList"
        [list-type]="listType" [disabled]="disabled"
        (remove)="removeHandle($event)" (preview)="lifecycle.preview($event)">
      </el-upload-list>
    </ng-template>
    
    <ng-template #triggerBlock>
      <div [class]="'el-upload el-upload--' + listType" (click)="clickHandle()">
        <el-button *ngIf="!trigger" size="small" type="primary">点击上传</el-button>
        <ng-container *ngIf="trigger">
          <ng-template [ngTemplateOutlet]="trigger"></ng-template>
        </ng-container>
        <input class="el-upload__input" type="file" name="file" #input
          [accept]="accept" [name]="name" [multiple]="multiple"
          (change)="changeHandle($event)">
      </div>
    </ng-template>
    
    <el-upload-dragger *ngIf="drag" [disabled]="disabled" (change)="changeHandle($event)">
      <ng-template [ngTemplateOutlet]="triggerBlock"></ng-template>
    </el-upload-dragger>
    
    <ng-container *ngIf="listType === 'picture-card'">
      <ng-template [ngTemplateOutlet]="uploadList"></ng-template>
    </ng-container>
    <ng-container *ngIf="!drag">
      <ng-template [ngTemplateOutlet]="triggerBlock"></ng-template>
    </ng-container>
    
    <ng-container *ngIf="tip">
      <ng-template [ngTemplateOutlet]="tip"></ng-template>
    </ng-container>
    <ng-container *ngIf="listType !== 'picture-card'">
      <ng-template [ngTemplateOutlet]="uploadList"></ng-template>
    </ng-container>
  `,
})
export class ElUpload extends ElUploadProps implements OnInit {
  
  @ContentChild('trigger') trigger: TemplateRef<any>
  @ContentChild('dragger') dragger: TemplateRef<any>
  @ContentChild('tip') tip: TemplateRef<any>
  @ViewChild('input') input: ElementRef
  
  files: CommonFile[] = []
  
  static generateID(): string {
    return Math.random().toString(16).substr(2, 8)
  }
  static updatePercentage(response: any): number {
    const { loaded, total } = response
    if (loaded === undefined || !total) return 0
    return Math.round(loaded / total * 100)
  }
  
  constructor(
    private request: ElUploadRequest,
    private sanitizer: DomSanitizer,
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
      const next = {
        id: ElUpload.generateID(),
        name: file.name,
        status: 'ready',
        size: file.size,
        percentage: 0,
        raw: file,
        url: this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file))
      }
      this.files.push(next)
      this.updateFile(next)
      this.uploadFilter(file) === false ? this.removeHandle(next) : this.upload(next)
    })
  }
  
  upload(file: CommonFile): void {
    file.status = 'uploading'
    this.updateFile(file)
    this.request.upload(this.action, file.raw)
      .subscribe((event: any) => {
        file.percentage = ElUpload.updatePercentage(event)
        file.percentage && this.lifecycle.progress(file, file.percentage)
        if (event instanceof HttpResponse) {
          this.lifecycle.success(Object.assign(file, { status: 'success' }), event)
        }
        this.updateFile(file)
      }, err => {
        file.status = 'fail'
        this.lifecycle.error(file, err)
        this.removeHandle(file)
      })
  }
  
  removeHandle(file: CommonFile): void {
    this.lifecycle.remove(file)
    const index = this.files.findIndex(({ id }) => file.id === id)
    this.files.splice(index, 1)
  }
  
  updateFile(file: CommonFile): void {
    const index = this.files.findIndex(({ id }) => file.id === id)
    if (!index) return
    this.files[index] = file
  }
  
  ngOnInit(): void {
    this.request
      .setHeader(this.headers)
      .setCredentials(this.withCredentials)
      .setFileName(this.name)
      .addExtraData(this.data)
    this.fileList.forEach((file: UploadFile) => {
      this.files.push({
        id: ElUpload.generateID(),
        name: file.name,
        status: 'success',
        raw: null, size: null,
        url: this.sanitizer.bypassSecurityTrustUrl(file.url),
      })
    })
  }
  
}
