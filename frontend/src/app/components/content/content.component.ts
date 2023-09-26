import { Component, OnInit } from '@angular/core';
import { DataEntry } from './entry';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  data : any = null;
  myClass = "yeah boi";
  entry: DataEntry[] = [];

  constructor(private dataService: DataService){}

  ngOnInit(): void{
    // this.entry[0] = {
    //   id: 1,
    //   name: "Kid Laroi",
    //   address: "York New, City",
    //   content: "Shees",
    //   type: "@Tech",
    //   display: true
    // }

    // this.entry[1] = {
    //   id: 2,
    //   name: "Kianu",
    //   address: "Lahug, Cebu",
    //   content: "Hello World",
    //   type: "@Food",
    //   display: true
    // }
    
    // this.entry[2] = {
    //   id: 2,
    //   name: "Lalatina",
    //   address: "Tokyo, Japan",
    //   content: "ahhhhhh!! Yamete!",
    //   type: "@Clothing",
    //   display: true
    // }
    this.dataService.fetchData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    }, (error) =>{
      console.log("Error fetching data", error);
    });
   

  }

  showData($event: any){
      console.log("button is clicked!");
      if($event) {
      console.log($event.target);
      console.log($event.target.value);
      }
    } 
}
