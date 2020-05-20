import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';

import { CreateRideComponent } from './components/create-ride/create-ride.component';
import { PickRideComponent } from './components/pick-ride/pick-ride.component';
import { HeaderComponent } from './header/header.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterRidesComponent } from './components/pick-ride/filter-rides/filter-rides.component';
import { PopupConfirmationComponent } from './shared/popup-confirmation/popup-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRideComponent,
    PickRideComponent,
    HeaderComponent,
    FilterRidesComponent,
    PopupConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
  ],
  entryComponents: [PopupConfirmationComponent],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
