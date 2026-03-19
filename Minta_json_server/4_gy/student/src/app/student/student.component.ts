import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from "../student.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { Student } from "../student";

@Component({
  selector: 'app-watch',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  students: Student[];
  constructor(private service: StudentsService) {}

  dataSource = new MatTableDataSource(this.students);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getStudents();
    this.dataSource = new MatTableDataSource(this.students);
  }

  columnsToDisplay: string[] = ["name", "neptunCode", "address", "specialization", "age", "increaseAge", "delete"];

  getStudents() {
    this.service.listStudents().subscribe(students => {
      this.students = students;
      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.sort);
      this.dataSource = new MatTableDataSource(this.students);
    }, (err) => {
      alert("An error occurred while getting students : " + err.message);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(student: Student) {
    this.service.deleteStudent(student).subscribe(() => {
      alert("The deletion of the student was successful.");
      this.getStudents();
    }, (err) => {
      alert("An error occurred while deleting the student : " + err.message);
      this.getStudents();
    });
  }

  increaseAge(student: Student) {
    student.age++;
    this.service.updateStudent(student).subscribe(() => {
      alert("The age was increased to "  + student.age);
      this.getStudents();
    }, (err) => {
      alert("An error occurred while increasing the age : " + err.message);
      this.getStudents();
    });
  }

}
