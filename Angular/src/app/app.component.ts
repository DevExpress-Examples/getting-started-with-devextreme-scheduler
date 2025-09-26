import { Component } from '@angular/core';
import { Appointment, AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
    appointments: Appointment[];
    currentDate: Date = new Date(2021, 4, 25);

    constructor(service: AppService) {
      this.appointments = service.getAppointments();
    }
}
