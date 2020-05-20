import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let rides = [
      {
        id: 1,
        employeeId: 'E001',
        vehicleType: 'Car',
        vehicleNo: 'KA0534',
        vacantSeats: 4,
        time: '08:20',
        pickUpPoint: 'Marathahalli',
        destination: 'ITPL Gate 2',
      },
      {
        id: 2,
        employeeId: 'E002',
        vehicleType: 'Car',
        vehicleNo: 'KA0556',
        vacantSeats: 6,
        time: '16:05',
        pickUpPoint: 'ITPL Gate 03',
        destination: 'Silkboard',
      },
      {
        id: 3,
        employeeId: 'E003',
        vehicleType: 'Bike',
        vehicleNo: 'KA0578',
        vacantSeats: 2,
        time: '20:10',
        pickUpPoint: 'ITPL Gate 01',
        destination: 'Marathahalli',
      },
    ];
    return { rides };
  }
}
