import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent implements OnInit {
  title = 'Seventh Component';

  // declared array of months. 
  months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  isavailable = false; // variable is set to true

  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button. 
    alert("Button is clicked");
    console.log(event);
  }
  changemonths(event) {
    alert("Changed month from the Dropdown");
  }

  constructor() { }

  ngOnInit() {
  }

}
