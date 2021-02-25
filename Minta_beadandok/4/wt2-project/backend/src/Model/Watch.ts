export class Watch {
  _id: string;
  price: number;
  brand: string;
  model: string;
  gender: string;
  movement: string;
  caseMaterial: string

  constructor(watch: any) {
    this._id = watch._id;
    this.price = watch.price;
    this.brand = watch.brand;
    this.model = watch.model;
    this.gender = watch.gender;
    this.movement = watch.movement;
    this.caseMaterial = watch.caseMaterial;
  }
}
