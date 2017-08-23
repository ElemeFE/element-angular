import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { environment } from '../../../../environments'

@Injectable()
export class DocsService {
  
  constructor(
    private http:Http,
  ) {
    console.log(environment)
  }
  
  getCatalog(): Observable<any> {
    return this.http.get(`${environment.host}/catalog.json`)
      .map(res => res.json())
  }
  
  getDocuments(documentType: string): Observable<any> {
    return this.http.get(`${environment.host}/${documentType}.json`)
      .map(res => res.json())
  }
  
}
