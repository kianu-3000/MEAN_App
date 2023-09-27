import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  title: string = 'asd';
  inputValue: string = '';

  constructor(private http: HttpClient, private router: Router){}

  // No idea what this is doing
  ngOnInit(): void{ 
  }

  // logs the value of the search input
  getValue(): void {
    console.log(this.inputValue)
  }
  // prevents form from reloading upon submitting
  onFormSubmit(event: Event){
    event.preventDefault();
    this.getValue();
  }
  
  // logs out a user 
  logout(){
    // where the post request to the api is made
    this.http.get('http://localhost:3000/auth/logout')
    .subscribe(data => { // this is when everything goes right in the server post request
      this.router.navigate(['/login']);
      console.log('Logged out:', data);
    }, (error) => { // when wrong credentials are made 
      this.router.navigate(['/home']);
      console.log('Logged out failed: ', error);
    });
    console.log('logout!');
  }
  
}
