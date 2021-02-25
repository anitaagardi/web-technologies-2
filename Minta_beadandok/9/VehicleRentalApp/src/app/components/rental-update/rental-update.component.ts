import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../service/api.service';
import {Rental} from '../../model/rental';
import {Vehicle} from '../../model/vehicle';

@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.css']
})
export class RentalUpdateComponent implements OnInit {
  submitted = false;
  closureForm: FormGroup;
  rentalData: any = [];
  rentedVehicles: any = [];
  VehicleStatus: any = ['AVAILABLE', 'RENTED', 'RETIRED'];
  bill: number;

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.getRental(id).then( () =>
      this.getRentedVehicles()
    );
    this.closureForm = this.fb.group({
      damage: [''],
      miles: ['', [Validators.required, Validators.pattern('^[^0][0-9]*$')]],
      duration: [''],
      bill: ['']
    });
  }

  // Getter to access form control
  get myForm() {
    return this.closureForm.controls;
  }

  async getRental(id) {
   await this.apiService.getRental(id).toPromise().then(data => {
      this.rentalData = data;
    });
  }


  calculateBill() {
    this.bill = 0;
    const start = Date.parse(this.rentalData.start);
    const end = Date.parse(this.rentalData.end);
    let rentalDuration = end - start;

    rentalDuration = rentalDuration / (1000 * 60 * 60 * 24);
    console.log('Rental duration: ' + rentalDuration);
    for (const vehicle of this.rentedVehicles) {
        this.bill += rentalDuration * vehicle.rentalFee;
    }
    this.bill += this.closureForm.value.miles * 70;
    if (this.closureForm.value.damage) {
      this.bill += 100000;
      console.log('Vehicle damaged! Extra fee added as penalty!');
    }
  }

  getRentedVehicles() {
    for (const vId of this.rentalData.RentedVehicle) {
      this.apiService.getVehicle(vId).subscribe(data => {
        this.rentedVehicles.push(data);
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (!this.closureForm.valid) {
      return false;
    } else {
        this.calculateBill();
        const id = this.actRoute.snapshot.paramMap.get('id');
        for ( const vehicle of this.rentedVehicles) {
          vehicle.status = 'AVAILABLE';
          this.apiService.updateVehicle(vehicle._id, vehicle).subscribe(() => {
            console.log('Vehicle status updated', vehicle._id);
          });
        }
    }
  }

}
