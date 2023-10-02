import { Component, OnInit } from '@angular/core';
import { DataEntry } from './entry';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  data : any = null;
  singleData: any;

  constructor(private dataService: DataService, private router: Router){}

  ngOnInit(): void{
    // This will display users
    this.dataService.fetchData().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    }, (error) =>{
      console.log("Error fetching data", error);
    });
  }

  // this will get a user in the api
  sendData(username){
      this.dataService.fetchSingleData(username).subscribe((data) => {
        this.singleData = data;
        this.router.navigate(['/shop']);
        localStorage.setItem('user', this.singleData.username);
        console.log(`User: ${this.singleData.username}, Email: ${this.singleData.email}`);
      }, (error) =>{
        console.log("Error fetching data", error);
      });
    } 
}
