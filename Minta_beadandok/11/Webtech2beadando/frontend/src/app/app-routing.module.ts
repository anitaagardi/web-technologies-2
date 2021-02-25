import { BookFormComponent } from './book-form/book-form.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'list', component: ListBooksComponent },
  { path: 'form', component: BookFormComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
