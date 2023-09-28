import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  user = localStorage.getItem('user');
  constructor(){}

  ngOnInit(){
    console.log(this.user);
  }
}
