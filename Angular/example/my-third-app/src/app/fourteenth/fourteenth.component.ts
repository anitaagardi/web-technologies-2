import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-fourteenth',
  templateUrl: './fourteenth.component.html',
  styleUrls: ['./fourteenth.component.css']
})
export class FourteenthComponent implements OnInit {
  title = 'Fourteenth Component';
  todaydate;
  componentproperty;
  emailid;
  formdata;
  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
  }
  onClickSubmit(data) { this.emailid = data.emailid; }



}
