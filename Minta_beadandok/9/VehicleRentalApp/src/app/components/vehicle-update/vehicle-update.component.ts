import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api.service';
import {Vehicle} from '../../model/vehicle';

@Component({
  selector: 'app-vehicle-update',
  templateUrl: './vehicle-update.component.html',
  styleUrls: ['./vehicle-update.component.css']
})
export class VehicleUpdateComponent implements OnInit {
  submitted = false;
  editVehicleForm: FormGroup;
  vehicleData: Vehicle[];
  VehicleStatus: any = ['AVAILABLE', 'RENTED', 'RETIRED'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateVehicle();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getVehicle(id);
    this.editVehicleForm = this.fb.group({
      type: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      plate: ['', [Validators.required]],
      vin: ['', [Validators.required]],
      acquired: ['', [Validators.required]],
      rentalFee: ['', [Validators.required, Validators.pattern('(0|^[1-9]\\d*$)')]],
      miles: ['', [Validators.required, Validators.pattern('^[^0][0-9]*$')]],
      status: ['', [Validators.required]]
    });
  }
  // Getter to access form control
  get myForm() {
    return this.editVehicleForm.controls;
  }

  getVehicle(id) {
    this.apiService.getVehicle(id).subscribe(data => {
      this.editVehicleForm.setValue({
        type: data.type,
        manufacturer: data.manufacturer,
        plate: data.plate,
        vin: data.vin,
        acquired: data.acquired,
        rentalFee: data.rentalFee,
        miles: data.miles,
        status: data.status,
      });
    });
  }

  updateVehicle() {
    this.editVehicleForm = this.fb.group({
      type: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      plate: ['', [Validators.required]],
      vin: ['', [Validators.required]],
      acquired: ['', [Validators.required]],
      rentalFee: ['', [Validators.required, Validators.pattern('(0|^[1-9]\\d*$)')]],
      miles: ['', [Validators.required, Validators.pattern('^[^0][0-9]*$')]],
      status: ['', [Validators.required]]
    });
  }

  updateStatus(e) {
    this.editVehicleForm.get('status').setValue(e, {
      onlySelf: true
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editVehicleForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure')) {
        const id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateVehicle(id, this.editVehicleForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/vehicle-list');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
