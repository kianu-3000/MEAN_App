import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  sendData(data: any){
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
      
    this.http.post('http://localhost:3000/auth/login', JSON.stringify(data), {
      headers: headers
    });
  }

}
