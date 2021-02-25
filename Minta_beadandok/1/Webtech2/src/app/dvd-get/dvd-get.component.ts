import { Component, OnInit } from '@angular/core';
import {DVD} from '../../Models/DVD';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dvd-get',
  templateUrl: './dvd-get.component.html',
  styleUrls: ['./dvd-get.component.css']
})
export class DVDGetComponent implements OnInit {

  DVDs: DVD[];
  searchText: string;


  constructor(private as: AppService, private router: Router) { }

  public ngOnInit(): void {
    this.as.getDVD().subscribe((data: DVD[]) => {
      this.DVDs = data;
    });
}
  deleteDVD(id) {
    this.as.updateDVDwithWaste(id)
      this.router.navigate(['successful-dvd-update']);
      console.log('Deleted');
    }
}
