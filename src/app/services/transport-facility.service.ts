import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ride } from '../models/CreateRide';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransportFacilityService {
  constructor(private httpClient: HttpClient) {}

  SERVER_URL: string = 'http://localhost:8080/api/rides/';

  createRide(body) {
    return this.httpClient.post(this.SERVER_URL, body);
  }

  getAvailableRides(): Observable<any> {
    return this.httpClient.get(this.SERVER_URL);
  }

  bookRide(data) {
    return this.httpClient.put(this.SERVER_URL, data);
  }
}
