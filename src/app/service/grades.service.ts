import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Grading } from '../models/grading';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  private api_url = 'http://localhost:3000 + /grading';
  constructor(private http: HttpClient) { }

  getGrades(): Observable<Grading[]> {
    return this.http.get<Grading[]>(this.api_url).pipe(tap(console.log));
  }
}
