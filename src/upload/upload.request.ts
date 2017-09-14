import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ElUploadRequest {
  
  private headers: HttpHeaders
  
  constructor(
    private http: HttpClient,
  ) {
  }

  upload(path: string, file: File): Observable<any> {
    const req: HttpRequest<File> = new HttpRequest('POST', path, file, {
      headers: this.headers,
      reportProgress: true,
    })
    return this.http.request(req)
  }
  
  setHeader(headers: any = {}): void {
    this.headers = new HttpHeaders(Object.assign({
      'content-type': 'multipart/form-data',
    }, headers))
  }
  
}

