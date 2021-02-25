import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Car } from './car.model';
import { Manufacturer } from '../Manufacturers/manufacturer.model';

@Injectable({providedIn: 'root'})
export class CarService {
  private cars: Car[] = [];
  manufacturers: Manufacturer [] = [];
  private carsUpdated = new Subject<Car[]>();
  private manufacturersUpdated = new Subject<Manufacturer[]>();

  constructor(private http: HttpClient) {}

  getCars() {
    this.http.get<{message: string, cars: any} >('http://localhost:3000/api/cars')
      .pipe(map((carData) => {
        return carData.cars.map(car => {
          return {
            id: car._id,
            Name: car.Name,
            Consumption: car.Consumption,
            Color: car.Color,
            Manufacturer: car.Manufacturer,
            Available: car.Available,
            Year: car.Year,
            Horsepower: car.Horsepower
          };
        });
      }))
      .subscribe((transformedCar) => {
        this.cars = transformedCar;
        this.carsUpdated.next([...this.cars]);
      });
  }

  getManufacturers(): Manufacturer[] {
    this.http.get<{message: string, manufacturers: any }>('http://localhost:3000/api/manufacturers')
      .pipe(map((manufacturerData) => {
        return manufacturerData.manufacturers.map(manufacturer => {
          return {
            id: manufacturer._id,
            Name: manufacturer.Name,
            Country: manufacturer.Country,
            Founded: manufacturer.Founded
          };
        });
      }))
      .subscribe((transformedManufacturers) => {
        this.manufacturers = transformedManufacturers;
        this.manufacturersUpdated.next([...this.manufacturers]);
      });
      return this.manufacturers;
  }

  getCar(id: string) {
    return {...this.cars.find(car => car.id === id)};
  }

  getCarsUpdateListener() {
    return this.carsUpdated.asObservable();
  }

  addCar(Name: string, Consumption: string, Color: string, Manufacturer: string, Available: string, Year: string, Horsepower: string) {
    const car:Car = {id: null, Name: Name, Consumption: Consumption, Color: Color, Manufacturer: Manufacturer, Available: Available, Year: Year, Horsepower: Horsepower};
    this.http.post<{message: string, carID: string}>('http://localhost:3000/api/cars', car)
      .subscribe((responseData) => {
        car.id = responseData.carID;
        this.cars.push(car);
        this.carsUpdated.next([...this.cars]);
      });
  }

  updateCar(id: string, Name: string, Consumption: string, Color: string, Manufacturer: string, Available: string, Year: string, Horsepower: string) {
    const car: Car = {id: id, Name: Name, Consumption: Consumption, Color: Color, Manufacturer: Manufacturer, Available: Available, Year: Year, Horsepower: Horsepower};
    this.http.put('Http://localhost:3000/api/cars/' + id, car)
      .subscribe(response => console.log(response));
  }

  deleteCar(carID: string) {
    this.http.delete("http://localhost:3000/api/cars/" + carID)
      .subscribe(() => {
        const updatedCars = this.cars.filter(car => car.id !== carID);
        this.cars = updatedCars;
        this.carsUpdated.next([...this.cars]);
      });
  }
}
