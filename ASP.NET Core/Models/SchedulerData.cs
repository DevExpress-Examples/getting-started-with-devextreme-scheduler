using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models;
static class SchedulerData {
    public static List<Appointment> Appointments = [
        new Appointment {
            ID = 1,
            Title = "Install New Database",
            StartDate = new DateTime(2021, 5, 23, 8, 45, 0, DateTimeKind.Utc),
            EndDate = new DateTime(2021, 5, 23, 9, 45, 0, DateTimeKind.Utc),
        },
        new Appointment {
            ID = 2,
            Title = "Create New Online Marketing Strategy",
            StartDate = new DateTime(2021, 5, 24, 9, 0, 0, DateTimeKind.Utc),
            EndDate = new DateTime(2021, 5, 24, 11, 0, 0, DateTimeKind.Utc),
        },
        new Appointment {
            ID = 3,
            Title = "Upgrade Personal Computers",
            StartDate = new DateTime(2021, 5, 25, 10, 15, 0, DateTimeKind.Utc),
            EndDate = new DateTime(2021, 5, 25, 13, 30, 0, DateTimeKind.Utc),
        },
        new Appointment {
            ID = 4,
            Title = "Customer Workshop",
            StartDate = new DateTime(2021, 5, 26, 8, 0, 0, DateTimeKind.Utc),
            EndDate = new DateTime(2021, 5, 26, 10, 0, 0, DateTimeKind.Utc),
            DayLong = true,
            Recurrence = "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10",
        },
        new Appointment {
            ID = 5,
            Title = "Prepare Development Plan",
            StartDate = new DateTime(2021, 5, 27, 8, 0, 0, DateTimeKind.Utc),
            EndDate = new DateTime(2021, 5, 27, 10, 30, 0, DateTimeKind.Utc),
        },
        new Appointment {
            ID = 6,
            Title = "Testing",
            StartDate = new DateTime(2021, 5, 23, 9, 0, 0, DateTimeKind.Utc),
            EndDate = new DateTime(2021, 5, 23, 10, 0, 0, DateTimeKind.Utc),
            Recurrence = "FREQ=WEEKLY;INTERVAL=2;COUNT=2",
        },
        new Appointment {
            ID = 7,
            Title = "Meeting of Instructors",
            StartDate = new DateTime(2021, 5, 24, 10, 0, 0, DateTimeKind.Utc),
            EndDate = new DateTime(2021, 5, 24, 11, 15, 0, DateTimeKind.Utc),
            Recurrence = "FREQ=DAILY;BYDAY=WE;UNTIL=20211001",
        },
        new Appointment {
            ID = 8,
            Title = "Recruiting students",
            StartDate = new DateTime(2021, 5, 25, 8, 0, 0, DateTimeKind.Utc),
            EndDate = new DateTime(2021, 5, 25, 9, 0, 0, DateTimeKind.Utc),
            Recurrence = "FREQ=YEARLY",
        },
        new Appointment {
            ID = 9,
            Title = "Monthly Planning",
            StartDate = new DateTime(2021, 5, 26, 9, 30, 0, DateTimeKind.Utc),
            EndDate = new DateTime(2021, 5, 26, 10, 45, 0, DateTimeKind.Utc),
            Recurrence = "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1",
        },
        new Appointment {
            ID = 10,
            Title = "Open Day",
            StartDate = new DateTime(2021, 5, 27, 9, 30, 0, DateTimeKind.Utc),
            EndDate = new DateTime(2021, 5, 27, 19, 0, 0, DateTimeKind.Utc),
        },
    ];

}
