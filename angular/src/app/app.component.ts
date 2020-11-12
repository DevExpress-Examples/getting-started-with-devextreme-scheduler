import { Component } from '@angular/core';

import {Appointment, Priority, AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
    appointmentsData: Appointment[];
    prioritiesData: Priority[];
    currentDate: Date = new Date(2021, 4, 25);

    constructor(service: AppService) {
      this.appointmentsData = service.getAppointments();
      this.prioritiesData = service.getPriorities();
    }
}
