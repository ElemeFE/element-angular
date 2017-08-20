import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { CATALOG } from './config'

@Injectable()
export class DocsService {
  
  constructor(
    private http:Http,
  ) {
  }
  
  getCatalog(): Observable<any> {
    return Observable.of(CATALOG)
  }
}
