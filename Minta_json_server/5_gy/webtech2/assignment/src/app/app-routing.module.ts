import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-products', pathMatch: 'full' },
  { path: 'add-product', component: AddProductComponent },
  { path: 'list-products', component: ListProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
