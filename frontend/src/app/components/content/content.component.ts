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
  singleData: any;

  constructor(private dataService: DataService){}

  ngOnInit(): void{
    this.dataService.fetchData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    }, (error) =>{
      console.log("Error fetching data", error);
    });
    

  }

  // this will fetch some single data to the express api
  showData($event: any, username){
    this.dataService.fetchSingleData(username).subscribe((data) => {
      this.singleData = data;
      console.log(this.singleData);
    }, (error) =>{
      console.log("Error fetching data", error);
    });
    } 
}
