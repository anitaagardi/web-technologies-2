import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Myservice2Service } from './myservice2.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-third-app';
  todaydate;
  public persondata = [];
  constructor(private myservice: MyserviceService, private myservice2: Myservice2Service) {

  }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.myservice2.getData().subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k => data[k]);
      console.log(this.persondata);
    });

  }

}


