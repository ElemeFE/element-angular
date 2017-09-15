import { EventEmitter, Input, Output } from '@angular/core'
import { HttpResponse } from '@angular/common/http'
import { UploadFile, Lifecycle, CommonFile, UploadResponse } from './upload.interface'

export class ElUploadProps {
  
  @Input() data: any = {}
  @Input() name: string = 'file'
  @Input() action: string
  @Input() accept: string
  @Input() drag: boolean = false
  @Input() multiple: boolean = false
  @Input() disabled: boolean = false
  @Input() headers?: any = {}
  
  @Input('with-credentials') withCredentials: boolean = false
  @Input('show-file-list') showFileList: boolean = true
  @Input('list-type') listType: string = 'text'
  // @Input('auto-upload') autoUpload: boolean = true
  @Input('file-list') fileList: UploadFile[] = []
  
  // lifecycle event
  @Output() preview: EventEmitter<CommonFile> = new EventEmitter<CommonFile>()
  @Output() remove: EventEmitter<CommonFile> = new EventEmitter<CommonFile>()
  @Output() progress: EventEmitter<UploadResponse<any>> = new EventEmitter<UploadResponse<any>>()
  // about http event
  @Output() success: EventEmitter<UploadResponse<any>> = new EventEmitter<UploadResponse<any>>()
  @Output() error: EventEmitter<UploadResponse<any>> = new EventEmitter<UploadResponse<any>>()
  
  @Input('upload-filter') uploadFilter: (f: File) => boolean = f => true
  
  protected get lifecycle(): Lifecycle {
    return {
      preview: (f: CommonFile) => this.preview.emit(f),
      remove: (f: CommonFile) => this.remove.emit(f),
      success: (f: CommonFile, res: HttpResponse<any>) => this.success.emit({ commonFile: f, response: res }),
      error: (f: CommonFile, err: any) => this.error.emit({ commonFile: f, error: err }),
      progress: (f: CommonFile, percentage: number) => this.progress.emit({ commonFile: f, percentage }),
    }
  }
}


