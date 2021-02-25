import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';
import {DVD} from '../../Models/DVD';
import {Customer} from '../../Models/Customer';
import {Router} from '@angular/router';




@Component({
  selector: 'app-dvd-add',
  templateUrl: './dvd-add.component.html',
  styleUrls: ['./dvd-add.component.css']
})
export class DVDAddComponent implements OnInit {

  angForm: FormGroup;
  TitleCheck: boolean = false;
  dvds: DVD[];
  DVDTitle: String;

  constructor(private fb: FormBuilder, private as: AppService,
              private router: Router) { this.createForm();}

  createForm(){
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      dateOfGet: ['', [Validators.required,Validators.pattern('^(0[1-9]|1[012])\.(0[1-9]|[12][0-9]|3[01])\.[0-9]{4}')]]
    });
  }
  addDVD(title, dateOfGet){
    this.DVDTitle = title;
    let dvdArray: any []= [];
    dvdArray.push(this.dvds)
    this.TitleCheck=false;
    let DVDContainedInTheDB = false;
    for(let i =0; i<dvdArray[0].length; i++){
      for(const dvd of dvdArray){
        if(dvd[i].title === title){
          DVDContainedInTheDB=true;
          break;
        }
      }
    }
    if(DVDContainedInTheDB == false) {
      this.as.addDVD(title, dateOfGet);
      this.router.navigate(['successful-dvd-add']);
    }else {
      this.TitleCheck=true;
    }
  }
  ngOnInit(): void {
    this.as.getDVD().subscribe((data: DVD[]) => {
      this.dvds = data;
    });

  }

}
