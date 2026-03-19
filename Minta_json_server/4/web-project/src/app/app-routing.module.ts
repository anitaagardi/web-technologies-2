import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WatchFormComponent } from './watch-form/watch-form.component';
import { WatchComponent } from './watch/watch.component';


const routes: Routes = [
        {path: '', component: LandingComponent},
        {path: 'add-watch', component: WatchFormComponent},
        {path: 'list-watches', component: WatchComponent},
        {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
