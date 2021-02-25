import { Component, OnInit } from '@angular/core';
import {DVD} from '../../Models/DVD';
import {AppService} from '../app.service';
import {Connection} from '../../Models/Connection';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bring-back',
  templateUrl: './bring-back.component.html',
  styleUrls: ['./bring-back.component.css']
})
export class BringBackComponent implements OnInit {
  Connections: Connection[];
  searchText: string;
  ModdedConnectionForDVD: Connection[];
  DVDs: DVD[];
  dvdID: String;

  constructor(private as: AppService, private router: Router) { }

  ngOnInit(): void {
    this.as.getConnection().subscribe((data: Connection[]) => {
      this.Connections = data;
      this.getDVDFromConnection()
    });
    this.as.getDVD().subscribe((data: DVD[]) => {
      this.DVDs = data;
    });
  }
  public getDVDFromConnection(){
    var ConnectionArray: any [] = [];
    ConnectionArray.push(this.Connections)
    for(const connection of ConnectionArray){
          var i = 0;
          this.ModdedConnectionForDVD = connection[i]["dvd"];
          i++;
        }
      }
  deleteFromConnection(dvdID, connectionID, dvdTitle){
    this.getDVD(dvdTitle);
    this.as.deleteFromConnection(dvdID, connectionID);
    this.as.updateDVDwithFree(this.dvdID);
    this.router.navigate(['successful-borrow-remove']);
  }
  getDVD(dvdTitle){
    var DVDArray: any[] = [];
    DVDArray.push(this.DVDs)
    for(let i=0; i<DVDArray[0].length;i++) {
      for (const dvd of DVDArray) {
        if(dvd[i].title === dvdTitle){
          this.dvdID = dvd[i]._id;
          break;
          }
        }
      }
    }
}
