import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import {ClienteleCreateComponent} from './components/clientele-create/clientele-create.component';
import {ClienteleListComponent} from './components/clientele-list/clientele-list.component';
import {ClienteleUpdateComponent} from './components/clientele-update/clientele-update.component';
import {VehicleCreateComponent} from './components/vehicle-create/vehicle-create.component';
import {RentalCreateComponent} from './components/rental-create/rental-create.component';
import {VehicleUpdateComponent} from './components/vehicle-update/vehicle-update.component';
import {RentalUpdateComponent} from './components/rental-update/rental-update.component';
import {VehicleListComponent} from './components/vehicle-list/vehicle-list.component';
import {RentalListComponent} from './components/rental-list/rental-list.component';
import {UserRegisterComponent} from './components/user-register/user-register.component';
import {UserLoginComponent} from './components/user-login/user-login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user-login' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'create-clientele', component: ClienteleCreateComponent },
  { path: 'create-vehicle', component: VehicleCreateComponent },
  { path: 'create-rental', component: RentalCreateComponent },
  { path: 'create-rental/:clienteleId', component: RentalCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'edit-clientele/:id', component: ClienteleUpdateComponent },
  { path: 'edit-vehicle/:id', component: VehicleUpdateComponent },
  { path: 'edit-rental/:id', component: RentalUpdateComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'clientele-list', component: ClienteleListComponent },
  { path: 'vehicle-list', component: VehicleListComponent },
  { path: 'rental-list', component: RentalListComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'user-login', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
