import defaultLang from './lang/zh-CN';
import { ElLocales } from './types';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
const hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj: object, key: string): any {
  return hasOwnProperty.call(obj, key);
};

@Injectable()
export class ElLocalesService {
  /**
   * TODO once updated to Angular 6:
   * - provideIn: 'root' in Injectable
   * - remove static instance
   */
  private static instance: ElLocalesService = null;
  
  resources$: Observable<ElLocales>;
  private _resources$: BehaviorSubject<ElLocales>;

  constructor() {
    if (ElLocalesService.instance) {
      return ElLocalesService.instance;
    }
    this._resources$ = new BehaviorSubject(defaultLang);
    this.resources$ = this._resources$.pipe(
      distinctUntilChanged()
    )
    ElLocalesService.instance = this;
  }

  use(l: ElLocales): void {
    this._resources$.next(l);
  }

  format(string: string, ...args: any[]): string {
    if (args.length === 1 && typeof args[0] === 'object') {
      args = args[0];
    }
  
    if (!args || !args.hasOwnProperty) {
      args = {} as any;
    }
  
    return string.replace(RE_NARGS, (match, prefix, i, index) => {
      let result: any;
  
      if (string[index - 1] === '{' &&
        string[index + match.length] === '}') {
        return i;
      } else {
        result = hasOwn(args, i) ? args[i] : null;
        if (result === null || result === undefined) {
          return '';
        }
  
        return result;
      }
    });
  }
}
