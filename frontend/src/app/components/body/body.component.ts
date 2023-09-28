import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  constructor(){
  }
  ngOnInit(): void{ 
    const jwtToken = localStorage.getItem('access_token');
    console.log('Token: ' + jwtToken);
  }
  
}
