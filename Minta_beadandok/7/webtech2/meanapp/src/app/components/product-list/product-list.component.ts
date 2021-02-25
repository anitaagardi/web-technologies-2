import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/service/api.service';
import { User } from '../../models/user'
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products: any=[];
  user= new User();
  username: string;
  name: string;
  email: string;

  constructor(
    private router: Router,
    private apiService:ApiService

    ) {
    this.readProduct();
    this.getUser();

    }

  ngOnInit(): void {
  }

  readProduct() {
    this.apiService.getProducts().subscribe((data) =>{
      this.Products=data;
    });
  }


  getUser(){

    if (this.apiService.getCurrentuser().userName== null){
      this.router.navigate(['/login']);
    }

    this.user=this.apiService.getCurrentuser();
    this.name= JSON.stringify(this.user.name)
    this.username= JSON.stringify(this.user.userName)
    this.email= JSON.stringify(this.user.email)
  }


  logout(){
    this.user= new User()
    this.apiService.setCurrentuser(this.user);
    this.router.navigate(['/login']);
  }


  edit(index){

    let id=this.Products[index]._id;
    this.router.navigate(['/product-edit/:'+ id]);

  }

}
