import { Component, OnInit } from '@angular/core';
import { DataEntry } from './entry';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  name : string = 'Kianu';
  myClass = "yeah boi";
  entry: DataEntry;

  constructor(){}

  ngOnInit(): void{
    this.entry = {
      id: 1,
      name: "Kid Laroi",
      address: "Cebu",
      content: "Something",
      type: "@Food"

    }
  }

  showData($event: any){
      console.log("button is clicked!");
      if($event) {
      console.log($event.target);
      console.log($event.target.value);
      }
    } 
}
