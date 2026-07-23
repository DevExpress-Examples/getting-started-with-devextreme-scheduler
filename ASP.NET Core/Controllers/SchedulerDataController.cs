using System.Linq;
using System.Text.Json;
using ASP_NET_Core.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace ASP_NET_Core.Controllers;

public class SchedulerDataController : Controller {

    [HttpGet]
    public object Get(DataSourceLoadOptions loadOptions) {
        return DataSourceLoader.Load(SchedulerData.Appointments, loadOptions);
    }

    [HttpPost]
    public IActionResult Insert(string values) {
        var appointment = new Appointment();
        PopulateAppointment(appointment, values);

        appointment.ID = SchedulerData.Appointments.Count > 0
            ? SchedulerData.Appointments.Max(e => e.ID) + 1
            : 1;
        
        SchedulerData.Appointments.Add(appointment);

        return Ok(appointment);
    }

    [HttpPut]
    public IActionResult Update(int key, string values) {
        var appointment = SchedulerData.Appointments.FirstOrDefault(e => e.ID == key);
        if(appointment == null)
            return NotFound();

        PopulateAppointment(appointment, values);

        return Ok(appointment);
    }

    [HttpDelete]
    public IActionResult Delete(int key) {
        var appointment = SchedulerData.Appointments.FirstOrDefault(e => e.ID == key);
        if (appointment == null)
            return NotFound();

        SchedulerData.Appointments.Remove(appointment);
        return NoContent();
    }

    private static void PopulateAppointment(Appointment appointment, string values) {
        using var document = JsonDocument.Parse(values);
        foreach (var property in document.RootElement.EnumerateObject()) {
            switch (property.Name) {
                case nameof(Appointment.Title):
                    appointment.Title = property.Value.GetString();
                    break;
                case nameof(Appointment.StartDate):
                    appointment.StartDate = property.Value.GetDateTime();
                    break;
                case nameof(Appointment.EndDate):
                    appointment.EndDate = property.Value.GetDateTime();
                    break;
                case nameof(Appointment.Recurrence):
                    appointment.Recurrence = property.Value.GetString();
                    break;
                case nameof(Appointment.RecurrenceException):
                    appointment.RecurrenceException = property.Value.GetString();
                    break;
                case nameof(Appointment.DayLong):
                    appointment.DayLong = property.Value.GetBoolean();
                    break;
            }
        }
    }

}
