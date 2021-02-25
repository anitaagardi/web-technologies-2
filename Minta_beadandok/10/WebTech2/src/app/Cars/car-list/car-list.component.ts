import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { Car } from '../car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, OnDestroy{
  cars: Car[] = [];
  private carsSub: Subscription;

  constructor(public carService:CarService) {}

  ngOnInit() {
    this.carService.getCars();
    this.carsSub = this.carService.getCarsUpdateListener()
      .subscribe((cars: Car[]) => {
        this.cars = cars;
      });
  }

  ngOnDestroy() {
    this.carsSub.unsubscribe();
  }

  onDelete(carID: string) {
    this.carService.deleteCar(carID);
  }
}
