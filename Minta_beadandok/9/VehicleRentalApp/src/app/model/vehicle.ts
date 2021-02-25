export class Vehicle {
  type: string;
  manufacturer: string;
  plate: string;
  vin: string;
  acquired: Date;
  rentalFee: number;
  miles: number;
  status: {
    type: string,
    enum: ['AVAILABLE', 'RENTED', 'RETIRED'],
    default: 'AVAILABLE'
  };
}
