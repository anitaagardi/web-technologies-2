import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../model/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api.service';
import {Clientele} from '../../model/clientele';

@Component({
  selector: 'app-clientele-update',
  templateUrl: './clientele-update.component.html',
  styleUrls: ['./clientele-update.component.css']
})
export class ClienteleUpdateComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  clienteleData: Clientele[];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateEmployee();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getClientele(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getClientele(id) {
    this.apiService.getClientele(id).subscribe(data => {
      this.editForm.setValue({
        name: data.name,
        email: data.email,
        address: data.address,
        phoneNumber: data.phoneNumber,
      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateClientele(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/clientele-list');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
