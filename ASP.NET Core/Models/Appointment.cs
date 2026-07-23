using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models;
public class Appointment {
    public int ID { get; set; }
    public string Title { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public bool? DayLong { get; set; }
    public string? Recurrence { get; set; }
    public string? RecurrenceException { get; set; }
}
