import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AnimalsService} from "../animals.service";
import {Animal} from "../animal";
import { Router} from '@angular/router';
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {
  animal: Animal;
  animalForm:FormGroup;
 

  constructor(private service: AnimalsService, private router: Router) {
     this.animalForm = new FormGroup(
    {
    name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(24)]),
    age: new FormControl('', [Validators.required, Validators.min(0)]),
    weight: new FormControl('', [Validators.required, Validators.min(0)]),
    breed: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(24)]),
    color: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(24)]),
    lifespan: new FormControl('', [Validators.required, Validators.min(0)]),
    friendliness:new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    }
  )
  }

  ngOnInit(){}



  onSubmit(){
    let animal = this.animalForm.value;
    this.service.addAnimal(animal).subscribe(() => {
      this.router.navigate(['/list-animals']);
       alert("Animal submitted to database.");
    }, (err) => {
      alert("An error has occured while submitting data to database : " + err.message);
    })

  }

}
