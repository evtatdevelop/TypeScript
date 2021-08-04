import faker from 'faker';
import { Markerable } from './CustomNap';

export class User implements Markerable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'black';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  markerContent = (): string => {
    return `I am ${this.name}.`
  }
}