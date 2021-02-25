import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import {NgModule} from "@angular/core";
import {User} from "../models/user";

declare var module: {
  id: string;
}

@Component({
  moduleId : module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AppService]
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];
  product = new Product();


  constructor(private router: Router,
  private appService: AppService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.appService.getProducts().subscribe(res => {
      this.products = res as Product[];
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  doDelete(product){
    this.appService.deleteProduct(product._id).subscribe(data => {
      this.products.splice(this.products.indexOf(product),1);
    });
  }


}
