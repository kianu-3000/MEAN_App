import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = {
    username: '',
    password: ''
  }

  // shows error messages
  show: boolean = false;
  message: string = '';

  constructor(private http: HttpClient, private router: Router){}

  onSubmit(event: Event){
    event.preventDefault(); // prevents default behavior on a form
    
    const headers = new HttpHeaders() // what type of request you are going to send
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    // where the post request to the api is made
    this.http.post('http://localhost:3000/auth/login', JSON.stringify(this.formData), {
      headers: headers
    })
    .subscribe(data => { // this is when everything goes right in the server post request
      this.router.navigate(['/home']);
      console.log('POST request successful:', data);
    }, (error) => { // when wrong credentials are made 
      this.router.navigate(['/login']);
      this.show = true;
      this.message = error.error.message;
      console.log('POST request error: ', error);
    });

  }
}
