import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ApiService} from 'src/app/service/api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')

  });

  users: any=[];

  constructor(

    private router: Router,
    private apiService:ApiService

    ) { }

  ngOnInit(): void {

  }

  get f() { return this.loginForm.value; }


  onSubmit(){
    let currentUser=(JSON.stringify(this.loginForm.value.userName))
    let currentPassword=(JSON.stringify(this.loginForm.value.password))
    let match= false;
    this.apiService.getUsers().subscribe((data) =>{
      this.users=data;

      for(let user of this.users){
        if(JSON.stringify(user.userName) === currentUser && currentPassword === JSON.stringify(user.password) ){
          match=true;
          this.apiService.setCurrentuser(user);
        }
      }


      if(match){
        this.router.navigate(['/product-list']);
      }
      else{
        document.getElementById('wrongDatas').innerHTML="Incorrect username or password!";
    
      }



    });


  }





}
