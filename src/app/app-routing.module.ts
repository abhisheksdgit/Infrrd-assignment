import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRideComponent } from './components/create-ride/create-ride.component';
import { PickRideComponent } from './components/pick-ride/pick-ride.component';

const routes: Routes = [
  {
    path: '',
    component: CreateRideComponent,
  },
  {
    path: 'createride',
    component: CreateRideComponent,
  },
  {
    path: 'pickride',
    component: PickRideComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
