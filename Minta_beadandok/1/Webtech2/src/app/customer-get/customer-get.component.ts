import { Component, OnInit } from '@angular/core';
import {Customer} from '../../Models/Customer';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {Connection} from '../../Models/Connection';

@Component({
  selector: 'app-customer-get',
  templateUrl: './customer-get.component.html',
  styleUrls: ['./customer-get.component.css']
})
export class CustomerGetComponent implements OnInit {
  customers: Customer[];
  searchText: string;
  ConnectionForCheck: Connection[];
  ConnectionID: String;
  DvDCheck: boolean = false;
  CustomerIDNum: String;
  dvdArrayEmpty: boolean = true;

  constructor(private as: AppService, private router: Router) { }

  ngOnInit(): void {
    this.as.getCustomer().subscribe((data: Customer[]) => {
      this.customers = data;
    });
    this.as.getConnection().subscribe((data: Connection[]) => {
      this.ConnectionForCheck = data;
    });
  }
  public dvdArrayChecking(IDNum){
    this.CustomerIDNum = IDNum
    var ConnectionArray: any[] = [];
    ConnectionArray.push(this.ConnectionForCheck)
    for(let i=0; i<ConnectionArray[0].length;i++) {
      for (const connection of ConnectionArray) {
        if(connection[i].customer.ID_Number=== IDNum){
          this.ConnectionID = connection[i]._id;
          console.log(connection[i])
          if (connection[i].dvd != ''){
            console.log(connection[i].dvd)
            this.dvdArrayEmpty= false;
          }
        }
      }
    }
  }
  deleteCustomer(id, IDNum) {
    this.dvdArrayChecking(IDNum)
    if(this.dvdArrayEmpty == true){
    this.as.deleteCustomer(id).subscribe(res => {
      this.as.deleteConnection(this.ConnectionID).subscribe(res => {
      });
      console.log('Deleted');
      this.router.navigate(['successful-customer-delete']);
    });
  }
    else{
    this.DvDCheck = true;
    }
  }


}
