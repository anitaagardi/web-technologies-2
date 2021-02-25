import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './service/api.service';
import {ReactiveFormsModule} from '@angular/forms';
import { ClienteleCreateComponent } from './components/clientele-create/clientele-create.component';
import { ClienteleListComponent } from './components/clientele-list/clientele-list.component';
import { ClienteleUpdateComponent } from './components/clientele-update/clientele-update.component';
import { VehicleCreateComponent } from './components/vehicle-create/vehicle-create.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleUpdateComponent } from './components/vehicle-update/vehicle-update.component';
import { RentalCreateComponent } from './components/rental-create/rental-create.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { RentalUpdateComponent } from './components/rental-update/rental-update.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    ClienteleCreateComponent,
    ClienteleListComponent,
    ClienteleUpdateComponent,
    VehicleCreateComponent,
    VehicleListComponent,
    VehicleUpdateComponent,
    RentalCreateComponent,
    RentalListComponent,
    RentalUpdateComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
