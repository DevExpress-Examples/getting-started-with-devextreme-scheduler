$(function(){
    var scheduler =  $("#scheduler").dxScheduler({
        currentDate: new Date(2021, 4, 25),
        dataSource: appointments,
        textExpr: "appointmentText",
        startDateExpr: "start",
        endDateExpr: "end",
        allDayExpr: "wholeDay",
        recurrenceRuleExpr: "recurrence",
        currentView: "workWeek",
        views: [
            "day",
            {
                type: "workWeek",
                startDayHour: 10,
                endDayHour: 22
            },
            "month", 
            "timelineWeek"
        ],
        resources: [
            {
                fieldExpr: "priorityId",
                dataSource: priorities,
                label: "Priority"
            }
        ],
        groups: ["priorityId"],
        editing: {
            allowDragging: false,
            allowTimeZoneEditing: true
        },
        timeZone: "Europe/Berlin",
        adaptivityEnabled: true,
    });
});