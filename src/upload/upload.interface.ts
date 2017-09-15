import { SafeUrl } from '@angular/platform-browser'
import { HttpResponse } from '@angular/common/http'

export interface UploadFile {
  url: string,
  name: string,
}

export interface Lifecycle {
  [key: string]: (...params: any[]) => void
}

export interface CommonFile {
  id: string,
  size: number,
  status: string,
  name: string,
  raw: File,
  url?: SafeUrl,
  percentage?: number,
}

export interface FilterEvent {
  file?: CommonFile,
  reject: Function,
  next: Function,
}

export interface UploadResponse<T> {
  commonFile: CommonFile,
  response?: HttpResponse<T>,
  error?: any,
  percentage?: number,
}

