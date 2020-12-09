import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_LINK = 'https://jsonplaceholder.typicode.com/posts/';
@Injectable({
  providedIn: 'root',
})
export class HttpTestService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<unknown> {
    return this.http.get<unknown>(API_LINK);
  }

  addPost(newPost): Observable<unknown> {
    return this.http.post<unknown>(API_LINK, newPost);
  }
}
