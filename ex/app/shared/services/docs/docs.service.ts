import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { environment } from '../../../../environments'

@Injectable()
export class DocsService {
  
  private host: string
  
  constructor(
    private http:Http,
  ) {
    this.host = (<any>environment).faas ? environment.faasHost : environment.host
  }
  
  getCatalog(): Observable<any> {
    return this.http.get(`${this.host}/catalog.json`)
      .map(res => res.json())
  }
  
  getDocuments(documentType: string): Observable<any> {
    return this.http.get(`${this.host}/${documentType}.json`)
      .map(res => res.json())
  }
  
  getVersion(): Observable<any> {
    return Observable.of(environment.version || '1.0.0')
  }
  
  getChangeLogs(): Observable<any> {
    return this.http.get(`${this.host}/changelog.json`)
      .map(res => res.json())
  }
  
}
