import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Manufacturer } from './manufacturer.model';

@Injectable({providedIn: 'root'})
export class ManufacturerService {
  private manufacturers: Manufacturer[] = [];
  private manufacturersUpdated = new Subject<Manufacturer[]>();

  constructor(private http: HttpClient) {}

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

  getManufacturersUpdateListener() {
    return this.manufacturersUpdated.asObservable();
  }

  getManufacturer(id: string) {
    return this.http.get<{ _id: string, Name: string, Country: string, Founded: string}>('http://localhost:3000/api/manufacturers/' + id);
  }

  addManufacturer(Name: string, Country: string, Founded: string) {
    const manufacturer: Manufacturer = {id: null, Name: Name, Country: Country, Founded: Founded};
    this.http.post<{message: string, manufacturerID: string }>('http://localhost:3000/api/manufacturers', manufacturer)
      .subscribe((responseData) => {
        manufacturer.id = responseData.manufacturerID;
        this.manufacturers.push(manufacturer);
        this.manufacturersUpdated.next([...this.manufacturers]);
      });
  }

  updateManufacturer(id: string, Name: string, Country: string, Founded: string) {
    const manufacturer: Manufacturer = {id: id, Name: Name, Country: Country, Founded: Founded};
    this.http.put('http://localhost:3000/api/manufacturers/' + id, manufacturer)
      .subscribe(response => {
        const updatedManufacturers = [...this.manufacturers];
        const oldManufacturerIndex = updatedManufacturers.findIndex(m => m.id === manufacturer.id);
        updatedManufacturers[oldManufacturerIndex] = manufacturer;
        this.manufacturers = updatedManufacturers;
        this.manufacturersUpdated.next([...this.manufacturers]);
      });
  }

  deleteManufacturer(manufacturerID: string) {
    this.http.delete("http://localhost:3000/api/manufacturers/" + manufacturerID)
      .subscribe(() => {
        const updatedManufacturers = this.manufacturers.filter(manufacturer => manufacturer.id !== manufacturerID);
        this.manufacturers = updatedManufacturers;
        this.manufacturersUpdated.next([...this.manufacturers]);
      });
  }
}
