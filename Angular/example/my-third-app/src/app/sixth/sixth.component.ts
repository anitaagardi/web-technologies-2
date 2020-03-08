import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {
  title = 'Sixth Component';

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
