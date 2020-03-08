import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ninth',
  templateUrl: './ninth.component.html',
  styleUrls: ['./ninth.component.css']
})
export class NinthComponent implements OnInit {
  title = 'Ninth Component';
  todaydate = new Date();
  jsonval = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug",
    "Sept", "Oct", "Nov", "Dec"];

  constructor() { }

  ngOnInit() {
  }

}
