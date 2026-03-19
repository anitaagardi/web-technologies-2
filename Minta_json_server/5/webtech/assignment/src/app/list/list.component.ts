import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  employees: any = [];
  username: string;

  constructor(private router: Router,
              private appService: AppService)
  {
    this.getEmployee();
  }

  ngOnInit(): void {
  }

  getEmployee() {
    this.appService.getEmployee().subscribe((data) => {
      this.employees = data;
    });
  }

}
