import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  title = 'First Component';

  // declared array of months. 
  months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  isavailable = true; //variable is set to true
  constructor() { }

  ngOnInit() {
  }



}
