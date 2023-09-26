import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  title: string = 'asd';
  inputValue: string = '';

  constructor(){}

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
}
