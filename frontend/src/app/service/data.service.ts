import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('http://localhost:3000/api/users');
  }
  fetchSingleData(username: string) {
    return this.http.get('http://localhost:3000/api/users/' + username);
  }
}
