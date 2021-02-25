import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Connection} from '../../Models/Connection';

@Component({
  selector: 'app-borrow-list',
  templateUrl: './borrow-list.component.html',
  styleUrls: ['./borrow-list.component.css']
})

export class BorrowListComponent implements OnInit {
  Connections: Connection[];
  dvd: any[] = [];
  searchText: string;
  ModdedConnectionForDVD: Connection[];
  date: Date;
  constructor(private as: AppService) { }

  ngOnInit(): void {
    this.as.getConnection().subscribe((data: Connection[]) => {
      this.Connections = data;
      this.getConnectionForSearch()
      let dateString = Date.now()
      this.date = (new Date(dateString));
    });
  }
  public getConnectionForSearch(){
    var ConnectionArray: any [] = [];
    ConnectionArray.push(this.Connections)
    var i = 0;
    for(const connection of ConnectionArray){
      this.ModdedConnectionForDVD = connection[i]["dvd"];
      i++;
    }
  }

  convertDate(dateOfBorrow){
    let dateSubtract = Math.abs((new Date(this.date).getTime())
      - (new Date(dateOfBorrow).getTime()))
    let delay =Math.ceil(dateSubtract/(1000*3600*24))
    if(delay> 6) {
      return delay-7;
    } else{
      return "There is no delay";
    }
  }
}
