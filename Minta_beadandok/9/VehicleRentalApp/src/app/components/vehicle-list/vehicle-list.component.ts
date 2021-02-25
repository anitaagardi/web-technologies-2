import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  Vehicles: any = [];
  hiddenVehicles: any = [];
  filterForm: FormGroup;

  constructor(private apiService: ApiService, public fb: FormBuilder) {
    this.readVehicle();
  }

  ngOnInit() {
    this.filterForm = this.fb.group({
      type: [''],
      plate: ['']
    });
  }

  readVehicle() {
    this.apiService.getAllVehicles().subscribe((data) => {
      this.Vehicles = data;
    });
  }

  removeVehicle(vehicle, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteVehicle(vehicle._id).subscribe((data) => {
          this.Vehicles.splice(index, 1);
        }
      );
    }
  }

  filterVehicles(type, plate) {
    for (const vehicle of this.hiddenVehicles) {
      this.Vehicles.push(vehicle);
    }
    this.hiddenVehicles = [];
    for (let i = 0; i <= this.Vehicles.length; i++) {
      const vehicle = this.Vehicles[i];
      if ((vehicle.type !== type && type.length > 0) || (vehicle.plate !== plate && plate.length > 0)) {
        this.Vehicles.splice(i, 1);
        this.hiddenVehicles.push(vehicle);
        i--;
      }
    }
  }

  onFilterSubmit() {
    this.filterVehicles(
      this.filterForm.value.type,
      this.filterForm.value.plate
    );
  }

}
