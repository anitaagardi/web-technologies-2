import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authServicce: AuthService) {}

  onLogin(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.authServicce.login(form.value.email, form.value.password);
  }
}
