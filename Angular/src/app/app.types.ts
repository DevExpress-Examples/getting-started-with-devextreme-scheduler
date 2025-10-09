export interface Appointment {
  title: string;
  startDate: Date;
  endDate: Date;
  dayLong?: boolean;
  recurrence?: string;
}
