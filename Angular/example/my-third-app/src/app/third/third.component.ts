import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  title = 'Third component';

  // declared array of months. 
  months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  isavailable = true; //variable is set to true 

  constructor() { }

  ngOnInit() {
  }

}
