import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  Rentals: any = [];

  constructor(private apiService: ApiService) {
    this.readRentals();
  }

  ngOnInit() {}

  readRentals() {
    this.apiService.getAllRentals().subscribe((data) => {
      this.Rentals = data;
    });
  }

  removeRental(rental, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteRental(rental._id).subscribe((data) => {
          this.Rentals.splice(index, 1);
        }
      );
    }
  }
}
