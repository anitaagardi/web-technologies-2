import { Watch } from "./Model/Watch";
import { Error } from "./Model/Error";

export class Validator {
  static watchPostError(watch: Watch): Error[] {
    let errors: Error[] = [];

    if(!watch) {
      errors.push(
        new Error("watch", "The watch object must be valid.")
      );
      return errors;
    }

    if(!watch.price){
      errors.push(
        new Error("watch.price", "The watch price is required.")
      );
    }

    if(watch.price < 1){
      errors.push(
        new Error("watch.price", "The watch price must be greater than 0.")
      );
    }

    if(!watch.brand){
      errors.push(
        new Error("watch.brand", "The watch brand is required.")
      );
    }

    if(!watch.model){
      errors.push(
        new Error("watch.model", "The watch model is required.")
      );
    }

    if(!watch.gender){
      errors.push(
        new Error("watch.gender", "The watch gender is required.")
      );
    }

    if(!watch.movement){
      errors.push(
        new Error("watch.movement", "The watch movement is required.")
      );
    }

    if(!watch.caseMaterial){
      errors.push(
        new Error("watch.caseMaterial", "The watch case material is required.")
      );
    }

    return errors;
  }
}
