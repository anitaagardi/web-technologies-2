import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {

  products: any = [];
  username: string;

  constructor(private productService: ProductService)
  {
    this.getProduct();
  }

  ngOnInit(): void {
  }

  getProduct() {
    this.productService.getProduct().subscribe((data) => {
      this.products = data;
    });
  }

}
