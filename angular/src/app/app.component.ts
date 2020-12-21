import { Component } from '@angular/core';
import { Appointment, Priority, AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
    appointments: Appointment[];
    priorities: Priority[];
    currentDate: Date = new Date(2021, 4, 25);

    constructor(service: AppService) {
      this.appointments = service.getAppointments();
      this.priorities = service.getPriorities();
    }
}
