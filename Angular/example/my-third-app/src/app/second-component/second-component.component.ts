import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  title = 'Second Component';

  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  isavailable = false; //variable is set to true
  constructor() { }

  ngOnInit() {
  }



}
