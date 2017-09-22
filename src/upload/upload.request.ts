import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ElUploadRequest {
  
  headers: HttpHeaders
  withCredentials: boolean
  fileName: string
  defaultBody: any
  
  constructor(
    private http: HttpClient,
  ) {
  }

  upload(path: string, file: File): Observable<any> {
    const req: HttpRequest<{}> = new HttpRequest('POST', path, file, {
      headers: this.headers,
      reportProgress: true,
      withCredentials: this.withCredentials,
    })
    return this.http.request(req)
  }
  
  setHeader(headers: any = {}): ElUploadRequest {
    this.headers = new HttpHeaders(headers)
    return this
  }
  
  setCredentials(withCredentials: boolean): ElUploadRequest {
    this.withCredentials = withCredentials
    return this
  }
  
  setFileName(name: string): ElUploadRequest {
    this.fileName = name
    return this
  }
  
  addExtraData(data: any = {}): ElUploadRequest {
    this.defaultBody = data
    return this
  }
  
}

