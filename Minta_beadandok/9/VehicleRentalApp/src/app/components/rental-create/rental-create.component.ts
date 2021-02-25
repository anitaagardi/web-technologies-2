import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../service/api.service';
import {Clientele} from '../../model/clientele';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.css']
})
export class RentalCreateComponent implements OnInit {

  rentalForm: FormGroup;
  Vehicles: any = [];
  addedVehicles: any = [];
  Clientele: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.mainForm();
    this.readVehicles();
    this.readClientele();
  }

  get myForm() {
    return this.rentalForm.controls;
  }

  ngOnInit(): void {}

  readVehicles() {
    this.apiService.getAllVehicles().subscribe((data) => {
      this.Vehicles = data;
    });
  }

  readClientele() {
    this.apiService.getAllClientele().subscribe((data) => {
      this.Clientele = data;
    });
  }

  updateSelectedClientele(id) {
    this.rentalForm.value.Clientele = id;
  }

  mainForm() {
    this.rentalForm = this.formBuilder.group({
      start: ['', [Validators.required]],
      end: ['', [Validators.required]],
      RentedVehicle: [''],
      Clientele: ['']
    });
  }

  addVehicle(vehicle, i) {
    this.Vehicles.splice(i, 1);
    this.addedVehicles.push(vehicle);
    // this.rentalForm.value.RentedVehicle = this.addedVehicles;
  }

  removeVehicle(vehicle, i) {
    this.addedVehicles.splice(i, 1);
    this.Vehicles.push(vehicle);
    // this.rentalForm.value.RentedVehicle = this.addedVehicles;
  }

  onSubmit() {
    if (!this.rentalForm.valid) {
      return false;
    } else {
      console.log(this.rentalForm.value);
      const RentedVehiclesId: any = [];
      for (const vehicle of this.addedVehicles) {
        RentedVehiclesId.push(vehicle._id);
      }
      this.rentalForm.value.RentedVehicle = RentedVehiclesId;
      this.apiService.createRental(this.rentalForm.value).subscribe(
        () => {
          this.addedVehicles.forEach((vehicle) => {
            vehicle.status = 'RENTED';
            this.apiService.updateVehicle(vehicle._id, vehicle).subscribe(() => {
              console.log('Status updated: ', vehicle._id);
            });
            console.log(
              'RentCreateComponent -> submitForm -> rentable',
              vehicle
            );
            this.apiService
              .updateRental(vehicle._id, vehicle)
              .subscribe(
                () => {
                  console.log('Rental updated!');
                },
                (error) => {
                  console.log(error);
                }
              );
          });
          console.log('Rental created!');
          this.ngZone.run(() => this.router.navigateByUrl('/rental-list'));
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
