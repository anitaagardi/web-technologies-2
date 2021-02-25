import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DVD} from '../../Models/DVD';
import {Connection} from '../../Models/Connection';
import {Customer} from '../../Models/Customer';
import {iterator} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.css']
})

export class BorrowingComponent implements OnInit {
  DVDs: DVD[];
  Connections: Connection[];
  searchText: string;
  Customers: Customer[];
  ModdedConnection: Connection[];
  ConnectionID: String;
  constructor(private as: AppService, private router: Router,
              private route: ActivatedRoute) {
  }
  public ngOnInit(): void {
    this.as.getDVD().subscribe((data: DVD[]) => {
      this.DVDs = data;
    });
    this.route.params.subscribe(params => {
    this.as.getCustomerById(params.id).subscribe((data: Customer[]) => {
      this.Customers = data;
      this.as.getConnection().subscribe((data2: Connection[]) => {
        this.Connections = data2;
        this.getConnIdAndConnDVD();
      });
    });
    });
}
public getConnIdAndConnDVD(){
  var CustomerArray: any [] = [];
  var ConnectionArray: any[] = [];
  ConnectionArray.push(this.Connections)
  CustomerArray.push(this.Customers)
  for(const customer of CustomerArray){
    for (const connection of ConnectionArray) {
      for(let i =0; i<ConnectionArray[0].length; i++) {
        if (customer.ID_Number === connection[i]["customer"]["ID_Number"]) {
          this.ConnectionID = connection[i]["_id"]
          this.ModdedConnection = connection[i]["dvd"];
        } else {
        }
      }
    }
  }
}
  addDVDtoConnection(DVDid, title){
    this.as.addDVDtoConnection(DVDid, title, this.ConnectionID);
    this.as.updateDVDwithBorrowed(DVDid);
    this.router.navigate(['successful-borrow-add']);
  }
}
