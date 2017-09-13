import { Headers, Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { HttpRequest } from '@angular/common/http'

@Injectable()
export class ElUploadRequest {
  
  headers: Headers
  
  constructor(
    private http: Http,
  ) {
  }

  upload(path: string, file: File): void {
    const req: any = new HttpRequest('POST', path, {
      data: file,
    }, Object.assign(this.headers, {
      reportProgress: true,
    }))
    this.http.request(req)
      .subscribe(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
  }
  
}

