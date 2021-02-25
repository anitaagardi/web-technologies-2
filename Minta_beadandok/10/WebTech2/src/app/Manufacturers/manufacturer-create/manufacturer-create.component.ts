import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ManufacturerService } from '../manufacturer.service';
import { Manufacturer } from '../manufacturer.model';

@Component({
  selector: 'app-manufacturer-create',
  templateUrl: './manufacturer-create.component.html'
})
export class ManufacturerCreateComponent implements OnInit{

  private mode = 'create';
  private manID: string;
  manufacturer: Manufacturer;
  title: string = "Add Manufacturer";

  constructor(public manufacturerService: ManufacturerService, public route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has("manID")) {
        this.mode = 'edit';
        this.manID = paramMap.get("manID");
        this.manufacturerService.getManufacturer(this.manID).subscribe(manufacturerData => {
          this.manufacturer = {id: manufacturerData._id, Name: manufacturerData.Name, Country: manufacturerData.Country, Founded: manufacturerData.Founded};
        });
        this.title = "Edit Manufacturer";
      }
      else {
        this.mode = 'create';
        this.manID = null;
      }
    });
  }

  onSaveManufacturer(form: NgForm) {
    if(form.invalid) {
      return;
    }
    if(this.mode === 'create') {
      this.manufacturerService.addManufacturer(form.value.name, form.value.country, form.value.founded);
    }
    else {
      this.manufacturerService.updateManufacturer(this.manID, form.value.name, form.value.country, form.value.founded);
    }
    form.resetForm();
  }
}
