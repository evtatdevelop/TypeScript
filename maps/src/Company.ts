import faker from 'faker';
import { Markerable } from './CustomNap';

export class Company implements Markerable {
  name: string;
  catchPrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'bllue';

  constructor() {
    this.name = faker.company.companyName();
    this.catchPrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  markerContent = (): string => {
    return `<h2>We are ${this.name}</h2>
    <h3>${this.catchPrase}</h3>`
  }
}