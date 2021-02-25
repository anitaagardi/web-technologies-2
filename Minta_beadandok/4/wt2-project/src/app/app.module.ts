import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WatchComponent } from './watch/watch.component';
import { WatchesService } from "./watches.service";
import { WatchFormComponent } from './watch-form/watch-form.component';
import {MatTableModule} from "@angular/material/table";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from "@angular/common/http";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatButton, MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './header/header.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    WatchFormComponent,
    LandingComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path: '', component: LandingComponent},
      {path: 'add-watch', component: WatchFormComponent},
      {path: 'list-watches', component: WatchComponent},
      {path: '**', component: NotFoundComponent}
    ]),
    MatDividerModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [
    WatchesService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
