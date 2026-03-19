import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsService } from "./animals.service";
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'add-animal', component: AnimalFormComponent},
  {path: 'list-animals', component: AnimalComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
