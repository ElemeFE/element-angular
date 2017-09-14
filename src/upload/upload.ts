import {
  Component, ContentChild, ElementRef, OnInit, TemplateRef,
  ViewChild,
} from '@angular/core'
import { ElUploadProps } from './upload.props'
import { ElUploadRequest } from './upload.request'
import { CommonFile, UploadFile } from './upload.interface'
import { HttpResponse } from '@angular/common/http'

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
        (change)="changeHandle($event)">
    </div>
    <ng-container *ngIf="tip">
      <ng-template [ngTemplateOutlet]="tip"></ng-template>
    </ng-container>

    <el-upload-list [files]="files" [disabled]="disabled"
      [list-type]="listType"
      (remove)="removeHandle($event)">
    </el-upload-list>
  `,
})
export class ElUpload extends ElUploadProps implements OnInit {
  
  @ContentChild('trigger') trigger: TemplateRef<any>
  @ContentChild('tip') tip: TemplateRef<any>
  @ViewChild('input') input: ElementRef
  
  private files: CommonFile[] = []
  
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
      }
      this.files.push(next)
      this.lifecycle.start()
      this.uploadFilter.emit({
        file: next,
        reject: () => this.removeHandle(next),
        next: () => this.upload(next),
      })
    })
  }
  
  upload(file: CommonFile): void {
    file.status = 'uploading'
    this.updateFile(file)
    this.request.upload(this.action, file.raw)
      .subscribe((event: any) => {
        file.percentage = ElUpload.updatePercentage(event)
        if (event instanceof HttpResponse) {
          file = Object.assign(file, { url: event.url, status: 'success' })
          this.lifecycle.success(file)
        }
        this.updateFile(file)
      }, err => {
        file.status = 'fail'
        this.lifecycle.error(err)
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
    this.request.setHeader(this.headers)
    this.fileList.forEach((file: UploadFile) => {
      this.files.push({
        id: ElUpload.generateID(),
        name: file.name,
        status: 'success',
        raw: null, size: null,
        url: file.url,
      })
    })
  }
  
}
