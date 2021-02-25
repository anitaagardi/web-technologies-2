import { Component, OnInit } from '@angular/core';
//import { Myservice2Service } from '../myservice2.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-twelfth',
  templateUrl: './twelfth.component.html',
  styleUrls: ['./twelfth.component.css']
})
export class TwelfthComponent implements OnInit {
  emailid;
  formdata;
  title = 'Twelfth Component';
  constructor(/*private myservice2: Myservice2Service*/) { }
  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl(),
      passwd: new FormControl("abcd1234")
    });
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
    console.log(this.emailid);
  }


}
