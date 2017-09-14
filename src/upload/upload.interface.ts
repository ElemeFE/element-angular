
export interface UploadFile {
  url: string,
  name: string,
}

export interface Lifecycle {
  [key: string]: (params?: any) => void
}

export interface CommonFile {
  id: string,
  size: number,
  status: string,
  name: string,
  raw: File,
  url?: string,
  percentage?: number,
}

export interface FilterEvent {
  file?: CommonFile,
  reject: Function,
  next: Function,
}
