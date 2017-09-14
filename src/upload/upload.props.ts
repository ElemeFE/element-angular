import { EventEmitter, Input, Output } from '@angular/core'
import { UploadFile, Lifecycle, CommonFile, FilterEvent } from './upload.interface'

export class ElUploadProps {
  
  @Input() data: any
  @Input() name: string
  @Input() action: string
  @Input() accept: string
  @Input() drag: boolean = false
  @Input() multiple: boolean = false
  @Input() disabled: boolean = false
  @Input() headers?: any
  
  @Input('with-credentials') withCredentials: boolean = false
  @Input('show-file-list') showFileList: boolean = true
  @Input('list-type') listType: string = 'text'
  @Input('auto-upload') autoUpload: boolean = true
  @Input('file-list') fileList: UploadFile[] = []
  
  @Output() preview: EventEmitter<CommonFile> = new EventEmitter<CommonFile>()
  @Output() remove: EventEmitter<CommonFile> = new EventEmitter<CommonFile>()
  @Output() success: EventEmitter<CommonFile> = new EventEmitter<CommonFile>()
  @Output() error: EventEmitter<any> = new EventEmitter<any>()
  @Output() progress: EventEmitter<any> = new EventEmitter<any>()
  @Output() change: EventEmitter<CommonFile> = new EventEmitter<CommonFile>()
  @Output('upload-filter') uploadFilter: EventEmitter<FilterEvent> = new EventEmitter<FilterEvent>()
  
  protected start: () => void = (): void => {}
  
  protected get lifecycle(): Lifecycle {
    return {
      start: this.start,
      preview: (f: CommonFile) => this.preview.emit(f),
      remove: (f: CommonFile) => this.remove.emit(f),
      success: (f: CommonFile) => this.success.emit(f),
      error: (...args: any[]) => this.error.emit(...args),
      progress: (...args: any[]) => this.progress.emit(...args),
      change: (f: CommonFile) => this.change.emit(f),
    }
  }
}


