import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufacturerListComponent } from './Manufacturers/manufacturer-list/manufacturer-list.component';
import { ManufacturerCreateComponent } from './Manufacturers/manufacturer-create/manufacturer-create.component';
import { CarListComponent } from './Cars/car-list/car-list.component';
import { CarCreateComponent } from './Cars/car-create/car-create.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignUpComponent},
  { path: 'manufacturer', component: ManufacturerListComponent, canActivate: [AuthGuard] },
  { path: 'manufacturer/create', component: ManufacturerCreateComponent, canActivate: [AuthGuard] },
  { path: 'manufacturer/edit/:manID', component: ManufacturerCreateComponent, canActivate: [AuthGuard] },
  { path: 'car', component: CarListComponent, canActivate: [AuthGuard] },
  { path: 'car/create', component: CarCreateComponent, canActivate: [AuthGuard] },
  { path: 'car/edit/:carID', component: CarCreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
