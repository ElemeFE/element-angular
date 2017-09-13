
export interface UploadFile {
  url: string,
  name: string,
}

export interface Lifecycle {
  [key: string]: (params?: any) => void
}



