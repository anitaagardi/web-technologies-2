import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  title = 'Fifth component';

  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  isavailable = true; //variable is set to true
  myClickFunction(event) {
    //just added console.log which will display the event 
    //details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
  }
  changemonths(event) {
    console.log("Changed month from the Dropdown");
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
