import { forwardRef, Inject, Injectable, LOCALE_ID } from '@angular/core'
import {Http, Response} from '@angular/http';
import {Observable, throwError as observableThrowError, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { environment } from '../../../../environments'

@Injectable()
export class DocsService {
  
  url: string
  path: string
  
  constructor(
    private http:Http,
    @Inject(forwardRef(() => LOCALE_ID)) private locale: string,
  ) {
    const host:string = (<any>environment).faas ? environment.faasHost : environment.host
    this.path = this.locale === 'en-US' ? '/en-US' : ''
    this.url = host + this.path
  }
  
  getCatalog(): Observable<any> {
    return this.http.get(`${this.url}/catalog.json`).pipe(
      catchError(err => this.handleResponseError(err)),
      map((res: Response) => {
        if (!res.text()) { return null; }
        return res.json();
      }));
  }
  
  getDocuments(documentType: string): Observable<any> {
    return this.http.get(`${this.url}/${documentType}.json`).pipe(
      catchError(err => this.handleResponseError(err)),
      map((res: Response) => {
        if (!res.text()) { return null; }
        return res.json();
      }));
  }
  
  getVersion(): Observable<any> {
    return of(environment.version || '1.0.0')
  }
  
  getChangeLogs(): Observable<any> {
    return this.http.get(`${this.url}/changelog.json`).pipe(
      catchError(err => this.handleResponseError(err)),
      map((res: Response) => {
        if (!res.text()) { return null; }
        return res.json();
      }));
  }

  private handleResponseError(error: Response): Observable<never> {
    return observableThrowError(error.json());
  }
}
