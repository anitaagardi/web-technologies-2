import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BorrowListComponent} from './borrow-list/borrow-list.component';
import {BringBackComponent} from './bring-back/bring-back.component';
import {CustomerAddComponent} from './customer-add/customer-add.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerGetComponent} from './customer-get/customer-get.component';
import {DVDAddComponent} from './dvd-add/dvd-add.component';
import {DVDGetComponent} from './dvd-get/dvd-get.component';
import {OpenerComponent} from './opener/opener.component';
import {BorrowingComponent} from './borrowing/borrowing.component';
import {SuccessfulBorrowAddComponent} from './successful-borrow-add/successful-borrow-add.component';
import {SuccessfulBorrowRemoveComponent} from './successful-borrow-remove/successful-borrow-remove.component';
import {SuccessfulCustomerAddComponent} from './successful-customer-add/successful-customer-add.component';
import {SuccessfulCustomerUpdateComponent} from './successful-customer-update/successful-customer-update.component';
import {SuccessfulDvdAddComponent} from './successful-dvd-add/successful-dvd-add.component';
import {SuccessfulDvdUpdateComponent} from './successful-dvd-update/successful-dvd-update.component';
import {SuccessfulCustomerDeleteComponent} from './successful-customer-delete/successful-customer-delete.component';

const routes: Routes = [

  {path: 'borrow-list', component: BorrowListComponent},
  {path: 'bring-back', component: BringBackComponent},
  {path: 'customer-add', component: CustomerAddComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'customer-get', component: CustomerGetComponent},
  {path: 'dvd-add', component: DVDAddComponent},
  {path: 'dvd-get', component: DVDGetComponent},
  {path: '', component: OpenerComponent},
  {path: 'borrowing/:id', component: BorrowingComponent},
  {path:'successful-borrow-add', component:SuccessfulBorrowAddComponent},
  {path:'successful-borrow-remove', component:SuccessfulBorrowRemoveComponent},
  {path:'successful-customer-add', component:SuccessfulCustomerAddComponent},
  {path:'successful-customer-update', component:SuccessfulCustomerUpdateComponent},
  {path:'successful-dvd-add', component:SuccessfulDvdAddComponent},
  {path:'successful-dvd-update', component:SuccessfulDvdUpdateComponent},
  {path:'successful-customer-delete', component:SuccessfulCustomerDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
