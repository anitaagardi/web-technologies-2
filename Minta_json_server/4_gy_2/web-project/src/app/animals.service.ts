import {Injectable} from '@angular/core';
import {Animal} from "./animal";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  animals: Animal[] = [];
  url: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  listAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.url + '/animals');
  }

  addAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.url + '/animals', animal);
  }

  updateAnimal(animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(this.url + '/animals/'+animal.id, animal);
  }

  deleteAnimal(animal: Animal): Observable<Animal> {
    return this.http.delete<Animal>(this.url + '/animals/' + animal.id);
  }
}
