export interface Ride {
  id?: number;
  employeeId: number;
  vehicleType: string;
  vehicleNo: string;
  vacantSeats: number;
  time: string;
  pickUpPoint: string;
  destination: string;
}
