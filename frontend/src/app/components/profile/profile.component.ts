import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  
  user = localStorage.getItem('user');
  userProductData: any;
  productDisplay: boolean = false;

  constructor(private dataService: DataService, private router: Router){}

  ngOnInit(): void{

    console.log(this.user);
    // get products of the visited shop user
    this.dataService.fetchProductData(this.user).subscribe((data) => {
    
      this.userProductData = data;
      if(this.userProductData == ''){
        console.log("No Products to display");
        this.productDisplay = true;
      }
      else{
        console.log("Products: " + this.userProductData);
        this.productDisplay = false;
      }
      
    }, (error) =>{
      console.log("Error: " + error);
    })

  }

}
