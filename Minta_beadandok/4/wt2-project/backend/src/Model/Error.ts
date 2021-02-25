export class Error {
  locationProperty: string;
  message: string;
  constructor(locationProperty: string, message: string) {
    this.locationProperty = locationProperty;
    this.message = message;
  }
}
