import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CarService } from '../car.service';
import { Car } from '../car.model';
import { Manufacturer } from 'src/app/Manufacturers/manufacturer.model';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit{

  private mode = 'create';
  private carID: string;
  car: Car;
  title: string = "Add Car";

  constructor(public carService: CarService, public route: ActivatedRoute) {}

  public manufacturers: Manufacturer[] = this.carService.getManufacturers();

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has("carID")) {
        this.mode = 'edit';
        this.carID = paramMap.get("carID");
        this.car = this.carService.getCar(this.carID);
        this.title = "Edit Car";
      }
      else {
        this.mode = 'create';
        this.carID = null;
      }
    });
  }

  onSaveCar(form: NgForm){
    if(form.invalid){
      return;
    }
    if(this.mode === 'create') {
      this.carService.addCar(form.value.name, form.value.consumption, form.value.color, form.value.manufacturer, form.value.available, form.value.year, form.value.horsepower);
    }
    else {
      this.carService.updateCar(this.carID, form.value.name, form.value.consumption, form.value.color, form.value.manufacturer, form.value.available, form.value.year, form.value.horsepower);
    }
    form.resetForm();
  }
}
