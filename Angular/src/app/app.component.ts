import { Component } from '@angular/core';
import { AppService } from './app.service';
import type { Appointment } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})
export class AppComponent {
  appointments: Appointment[];

  currentDate: Date = new Date(2021, 4, 25);

  constructor(service: AppService) {
    this.appointments = service.getAppointments();
  }
}
