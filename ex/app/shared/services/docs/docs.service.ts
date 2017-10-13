import { forwardRef, Inject, Injectable, LOCALE_ID } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { environment } from '../../../../environments'

@Injectable()
export class DocsService {
  
  private url: string
  private path: string
  
  constructor(
    private http:Http,
    @Inject(forwardRef(() => LOCALE_ID)) private locale: string,
  ) {
    const host:string = (<any>environment).faas ? environment.faasHost : environment.host
    this.path = this.locale === 'en-US' ? '/en-US' : ''
    this.url = host + this.path
  }
  
  getCatalog(): Observable<any> {
    return this.http.get(`${this.url}/catalog.json`)
      .map(res => res.json())
  }
  
  getDocuments(documentType: string): Observable<any> {
    return this.http.get(`${this.url}/${documentType}.json`)
      .map(res => res.json())
  }
  
  getVersion(): Observable<any> {
    return Observable.of(environment.version || '1.0.0')
  }
  
  getChangeLogs(): Observable<any> {
    return this.http.get(`${this.url}/changelog.json`)
      .map(res => res.json())
  }
  
}
