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
