import { Component, OnInit } from '@angular/core';
import { TransportFacilityService } from 'src/app/services/transport-facility.service';
import { Ride } from 'src/app/models/CreateRide';
import { MatDialog } from '@angular/material/dialog';
import { PopupConfirmationComponent } from 'src/app/shared/popup-confirmation/popup-confirmation.component';

@Component({
  selector: 'app-pick-ride',
  templateUrl: './pick-ride.component.html',
  styleUrls: ['./pick-ride.component.css'],
})
export class PickRideComponent implements OnInit {
  constructor(
    private transportFacility: TransportFacilityService,
    public dialog: MatDialog
  ) {}
  availableRides: Ride[] = [];
  filteredRides: Ride[] = [];
  ngOnInit(): void {
    this.transportFacility.getAvailableRides().subscribe((rides) => {
      this.availableRides = [...rides];
      this.filteredRides = [...rides];
      console.log('Filtered rides: ');
      console.log(this.filteredRides);
    });
  }

  requestRide(id) {
    let updatedRide;
    this.filteredRides = this.filteredRides.map((ride) => {
      if (id === ride.id) {
        updatedRide = {
          id: id,
          employeeId: ride.employeeId,
          vehicleType: ride.vehicleType,
          vehicleNo: ride.vehicleNo,
          vacantSeats: ride.vacantSeats - 1,
          time: ride.time,
          pickUpPoint: ride.pickUpPoint,
          destination: ride.destination,
        };
        return updatedRide;
      } else {
        return ride;
      }
    });

    this.transportFacility.bookRide(updatedRide).subscribe((res) => {
      console.log(res);
    });
    let dialogRef = this.dialog.open(PopupConfirmationComponent, {
      height: '180px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  filterRides(vehicleType) {
    console.log('Filtered value for rides: ' + vehicleType);
    let updatedAvailableRides;
    if (vehicleType === 'Car') {
      updatedAvailableRides = this.availableRides.filter((ride) => {
        return ride.vehicleType === 'Car';
      });
      this.filteredRides = updatedAvailableRides;
    } else if (vehicleType === 'Bike') {
      updatedAvailableRides = this.availableRides.filter((ride) => {
        return ride.vehicleType === 'Bike';
      });
      this.filteredRides = updatedAvailableRides;
    } else {
      this.filteredRides = this.availableRides;
    }
  }
}
