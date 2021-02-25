import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { ManufacturerService } from '../manufacturer.service';
import { Manufacturer } from '../manufacturer.model';

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.css']
})
export class ManufacturerListComponent implements OnInit, OnDestroy{
  manufacturers: Manufacturer[] = []
  private manufacturerSub: Subscription;

  constructor(public manufacturerService: ManufacturerService) {}

  ngOnInit() {
    this.manufacturerService.getManufacturers();
    this.manufacturerSub = this.manufacturerService.getManufacturersUpdateListener()
      .subscribe((manufacturers: Manufacturer[]) => {
        this.manufacturers = manufacturers;
      });
  }

  ngOnDestroy() {
    this.manufacturerSub.unsubscribe();
  }

  onDelete(manufacturerID: string) {
    this.manufacturerService.deleteManufacturer(manufacturerID);
  }
}
