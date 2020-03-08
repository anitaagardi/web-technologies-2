import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';
@Component({
  selector: 'app-eleventh',
  templateUrl: './eleventh.component.html',
  styleUrls: ['./eleventh.component.css']
})
export class EleventhComponent implements OnInit {


  newcomponent = "Entered in new component created";
  todaydate;
  constructor(private myservice: MyserviceService) { }
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }


}
