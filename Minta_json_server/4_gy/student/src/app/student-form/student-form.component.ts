import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {StudentsService} from "../student.service";
import {Student} from "../student";
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student: Student;

  name = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(24)]);
  neptunCode = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(24)]);
  address = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(24)]);
  specialization = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(24)]);
  age = new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]);


  studentForm = new FormGroup(
    {
      name: this.name,
      neptunCode: this.neptunCode,
      address: this.address,
      specialization: this.specialization,
      age: this.age
    }
  )

  constructor(private service: StudentsService, private router:Router) {}

  ngOnInit(){}

  getErrorMessage() {
    if (this.name.hasError('required') ||
      this.neptunCode.hasError('required') ||
      this.address.hasError('required') ||
      this.specialization.hasError('required') ||
      this.age.hasError('required')
    ) {
      return ('You must enter a valid value.');
    }
  }

 

  onSubmit(){
    let student = this.studentForm.value;
    this.service.addStudent(student).subscribe(() => {
      alert("Add student to database.");
      this.router.navigate(['/list-students']);
    }, (err) => {
      alert("An error has occured while submitting student to database : " + err.message);
    })

  }

}
