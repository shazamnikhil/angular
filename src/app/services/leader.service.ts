import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getleaders(): Observable<Leader[]> {
  	return of(LEADERS).pipe(delay(2000));
  }

  getleader(id: string): Observable<Leader> {
  	return of(LEADERS.filter((Leader) => (Leader.id === id))[0]).pipe(delay(2000));
  }

  getFeatured(): Observable<Leader> {
   return of(LEADERS.filter((Leader) => Leader.featured)[0]).pipe(delay(2000));
  }
}
