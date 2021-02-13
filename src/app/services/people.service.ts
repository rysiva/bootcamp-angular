import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private jsonUrl = 'https://github.com/iij/bootcamp/test.json';

  constructor(private http: HttpClient) { }

  getJson(): Observable<People[]> {
    return this.http.get<People[]>(this.jsonUrl);
  }
}
