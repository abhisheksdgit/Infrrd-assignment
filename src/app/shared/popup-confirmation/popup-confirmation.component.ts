import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const RIDE_CREATED_SUCCESS_MESSAGE = 'Ride created successfully';
const RIDE_REQUESTED_SUCCESS_MESSAGE = 'Ride request sent successfully';

@Component({
  selector: 'app-popup-confirmation',
  templateUrl: './popup-confirmation.component.html',
  styleUrls: ['./popup-confirmation.component.css'],
})
export class PopupConfirmationComponent implements OnInit {
  successMessage: string;
  constructor(private route: Router) {}

  ngOnInit(): void {
    let currentRoute = this.route.url;
    if (currentRoute === '/createride' || currentRoute === '/') {
      this.successMessage = RIDE_CREATED_SUCCESS_MESSAGE;
    } else if (currentRoute === '/pickride') {
      this.successMessage = RIDE_REQUESTED_SUCCESS_MESSAGE;
    }
  }
}
