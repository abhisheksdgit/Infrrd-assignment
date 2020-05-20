import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransportFacilityService } from '../../services/transport-facility.service';
import { PopupConfirmationComponent } from 'src/app/shared/popup-confirmation/popup-confirmation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html',
  styleUrls: ['./create-ride.component.css'],
})
export class CreateRideComponent implements OnInit {
  createRideForm;

  constructor(
    private transportFacility: TransportFacilityService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createRideForm = new FormGroup({
      employeeId: new FormControl('', [Validators.required]),
      vehicleType: new FormControl('', [Validators.required]),
      vehicleNo: new FormControl('', [Validators.required]),
      vacantSeats: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      pickUpPoint: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required]),
    });
    setTimeout(() => {
      console.log(this.createRideForm);
    }, 2000);
  }

  onCreateRide() {
    console.log(this.createRideForm);
    if (this.createRideForm.valid) {
      const body = {
        employeeId: this.createRideForm.get('employeeId').value,
        vehicleType: this.createRideForm.get('vehicleType').value,
        vehicleNo: this.createRideForm.get('vehicleNo').value,
        vacantSeats: this.createRideForm.get('vacantSeats').value,
        time: this.createRideForm.get('time').value,
        pickUpPoint: this.createRideForm.get('pickUpPoint').value,
        destination: this.createRideForm.get('destination').value,
      };
      this.transportFacility.createRide(body).subscribe((res) => {
        console.log(res);
      });
    }
    this.createRideForm.reset();
    let dialogRef = this.dialog.open(PopupConfirmationComponent, {
      height: '180px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  reset() {
    this.createRideForm.reset();
  }
}
