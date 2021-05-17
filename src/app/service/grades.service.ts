import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, toArray,mergeMap, map } from 'rxjs/operators';
import { Grading } from '../models/grading';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  api_url = 'http://localhost:3000/grading';
  constructor(private http: HttpClient) { }

  getGrades() {
    return this.http.get<Grading>(this.api_url).pipe(map(arr => arr.sort((a: Grading, b: Grading) => a.name === b.name ? 0 : a.name ? 1 : -1))).pipe(tap(console.log));
  }

  postGrades(newGrade:Partial<Grading>) {
    return this.http.post(this.api_url, newGrade).pipe(tap(console.log));
  }

  deleteGrades(id: number): Observable<{}> {
    return this.http.delete<{}>(this.api_url + '/' + id).pipe(tap(console.log));
  }
}
