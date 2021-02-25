import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { SeventhComponent } from './seventh/seventh.component';
import { FirstDirective } from './first.directive';
import { EightComponent } from './eight/eight.component';
import { NinthComponent } from './ninth/ninth.component';
import { TenthComponent } from './tenth/tenth.component';

import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyserviceService } from './myservice.service';
import { EleventhComponent } from './eleventh/eleventh.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwelfthComponent } from './twelfth/twelfth.component';
import { ThirteenthComponent } from './thirteenth/thirteenth.component';
import { FourteenthComponent } from './fourteenth/fourteenth.component';
import { FifteenthComponent } from './fifteenth/fifteenth.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { SqrtPipe } from './app.sqrt';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    FirstDirective,
    EightComponent,
    NinthComponent,
    TenthComponent,
    SqrtPipe,
    HomeComponent,
    ContactusComponent,
    EleventhComponent,
    TwelfthComponent,
    ThirteenthComponent,
    FourteenthComponent,
    FifteenthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
