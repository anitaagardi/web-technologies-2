import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from "../employees.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { Employee } from "../employee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})

export class ListEmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private service: EmployeesService) {}

  dataSource = new MatTableDataSource(this.employees);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getEmployees();
    this.dataSource = new MatTableDataSource(this.employees);
  }

  columnsToDisplay: string[] = ["name", "age", "position", "address","company","department","salary", "delete"];

  getEmployees() {
    this.service.listEmployees().subscribe(watches => {
      this.employees = watches;
      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.sort);
      this.dataSource = new MatTableDataSource(this.employees);
    }, (err) => {
      alert("An error occurred while getting data : " + err.message);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(employee: Employee) {
    this.service.deleteEmployee(employee).subscribe(() => {
      alert("The deletion of the employee was successful.");
      this.getEmployees();
    }, (err) => {
      alert("An error occurred while deleting the employee : " + err.message);
      this.getEmployees();
    });
  }

  

}
