import { HttpClientModule } from '@angular/common/http';
 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, timer} from 'rxjs';
// import 'rxjs/add/operator/map';
import { debounceTime } from 'rxjs/operators';
import { map, switchMap } from 'rxjs/operators';
//  import 'rxjs/operators/operator';
//  import 'rxjs/add/operator/switchMap';
import { distinctUntilChanged } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import {createHttpObservable} from './util';

@Injectable()
export class SearchService {
   baseUrl:  'https://api.cdnjs.com/libraries';
   queryUrl:  '?search=';
  //  const $input = document.querySelector('#textInput');
  //  const $results = $('#results');
   constructor(private httpClient: HttpClient) { }



  search(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(750),
      distinctUntilChanged(),
      tap(console.log),
      switchMap(term => this.searchEntries(term)));

  }

  searchEntries(term) {
    return this.httpClient.get('https://api.cdnjs.com/libraries?search=' + term);

 }
}
