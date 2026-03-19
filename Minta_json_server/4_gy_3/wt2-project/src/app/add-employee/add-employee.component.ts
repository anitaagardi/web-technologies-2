import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {EmployeesService} from "../employees.service";
import {Employee} from "../employee";
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee;

  name = new FormControl('', [Validators.required, Validators.minLength(5),Validators.maxLength(30)]);
  age= new FormControl('',[Validators.required,Validators.min(14),Validators.max(75)]);
  position = new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]);
  address = new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(30)]);
  company = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]);
  department = new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]);
  salary = new FormControl('', [Validators.required, Validators.min(0)])



  employeeForm = new FormGroup(
    {
      name:this.name,
      age:this.age,
      position:this.position,
      address: this.address,
      company:this.company,
      department:this.department,
      salary:this.salary
    }
  )

  constructor(private service: EmployeesService) {}

  ngOnInit(){}

  

  onSubmit(){
    let employee = this.employeeForm.value;
    this.service.addEmployee(employee).subscribe(() => {
      alert("Employee submitted to database.");
      /*this.watchForm.controls['price'].reset();
      this.watchForm.controls['brand'].reset();
      this.watchForm.controls['model'].reset();*/
    }, (err) => {
      alert("An error has occured while submitting employee to database : " + err.message);
    })

  }

}
