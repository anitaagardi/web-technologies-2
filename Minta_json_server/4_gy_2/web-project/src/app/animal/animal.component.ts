import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimalsService } from "../animals.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { Animal } from "../animal";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})

export class AnimalComponent implements OnInit {
  animals: Animal[];
  constructor(private service: AnimalsService) {}

  dataSource = new MatTableDataSource(this.animals);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getAnimals();
    this.dataSource = new MatTableDataSource(this.animals);
  }

  columnsToDisplay: string[] = ["name", "age", "weight", "breed", "color", "lifespan", "friendliness",
     "increaseWeight", "increaseLifespan", "delete"];


  getAnimals() {
    this.service.listAnimals().subscribe(animals => {
      this.animals = animals;
      setTimeout(() => this.dataSource.paginator = this.paginator);
      setTimeout(() => this.dataSource.sort = this.sort);
      this.dataSource = new MatTableDataSource(this.animals);
    }, (err) => {
      alert("An error occurred while getting data : " + err.message);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(animal: Animal) {
    this.service.deleteAnimal(animal).subscribe(() => {
      alert("The deletion of the data was successful.");
      this.getAnimals();
    }, (err) => {
      alert("An error occurred while deleting the data : " + err.message);
      this.getAnimals();
    });
  }

  increaseWeight(animal: Animal) {
    animal.weight += 1;
    this.service.updateAnimal(animal).subscribe(() => {
      alert("The animal weight was increased to "  + animal.weight);
      this.getAnimals();
    }, (err) => {
      alert("An error occurred while increasing the animal weight : " + err.message);
      this.getAnimals();
    });
  }

  increaseLifespan(animal: Animal) {
    animal.lifespan += 1;
    this.service.updateAnimal(animal).subscribe(() => {
      alert("The animal lifespan was increased to "  + animal.lifespan);
      this.getAnimals();
    }, (err) => {
      alert("An error occurred while increasing the animal lifespan : " + err.message);
      this.getAnimals();
    });
  }

}
