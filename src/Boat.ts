import { CountryCode } from './Geo';
import { User } from './User';

export interface BoatRegistration {
  number: string;
  country: CountryCode;
}

export enum BoatType {
  SAIL = 'sail boat',
  MOTOR = 'motor boat',
}

export interface Boat {
  uuid: string;
  name: string;
  registration: BoatRegistration;
  owners: User[];
  crew: User[];
  type: BoatType;
}