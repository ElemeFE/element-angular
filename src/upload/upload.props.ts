import { EventEmitter, Input, Output } from '@angular/core'
import { UploadFile, Lifecycle } from './upload.interface'

export class ElUploadProps {
  
  @Input() data: any
  @Input() name: string
  @Input() action: string
  @Input() accept: string
  @Input() drag: boolean = false
  @Input() multiple: boolean = false
  @Input() disabled: boolean = false
  @Input() headers?: Headers
  
  @Input('with-credentials') withCredentials: boolean = false
  @Input('show-file-list') showFileList: boolean = true
  @Input('list-type') listType: string = 'text'
  @Input('auto-upload') autoUpload: boolean = true
  @Input('file-list') fileList: UploadFile[]
  
  @Output() preview: EventEmitter<File> = new EventEmitter<File>()
  @Output() remove: EventEmitter<any> = new EventEmitter<any>()
  @Output() success: EventEmitter<any> = new EventEmitter<any>()
  @Output() error: EventEmitter<any> = new EventEmitter<any>()
  @Output() progress: EventEmitter<any> = new EventEmitter<any>()
  @Output() change: EventEmitter<File> = new EventEmitter<File>()
  
  @Input('upload-filter') uploadFilter: (f: File, done: Function) => void = (f, d): void => d()
  
  protected start: () => void = (): void => {}
  
  protected get lifecycle(): Lifecycle {
    return {
      start: this.start,
      preview: (file: File) => this.preview.emit(file),
      remove: (...args: any[]) => this.remove.emit(...args),
      success: (...args: any[]) => this.success.emit(...args),
      error: (...args: any[]) => this.error.emit(...args),
      progress: (...args: any[]) => this.progress.emit(...args),
      change: (file: File) => this.change.emit(file),
    }
  }
}


