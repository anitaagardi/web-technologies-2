import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
      {path: '', component: LandingComponent},
      {path: 'add-student', component: StudentFormComponent},
      {path: 'list-students', component: StudentComponent},
      {path: '**', component: NotFoundComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
